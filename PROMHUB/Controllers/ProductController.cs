using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PROMHUB.Data;
using PROMHUB.Data.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace PROMHUB.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _context;

        private static List<ProductGet> products = new List<ProductGet>(new[] {
            new ProductGet() { Id = 1, Name = "Product A", Price = 100.0, Discount = 10, Photo = "Calculator_img.png"},
            new ProductGet() { Id = 2, Name = "Product B", Price = 50.0, Discount = 5, Photo = "Calculator_img.png" },
            new ProductGet() { Id = 3, Name = "Product C", Price = 75.0, Discount = 0 , Photo = "Calculator_img.png"}
        });

        private readonly string _imagesFolderPath = @"../Data/img/";

        public ProductController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<ProductGet> Get()
        {
            // Создаем копию списка products
            var copiedProducts = products.Select(p => new ProductGet
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                Discount = p.Discount,
                Photo = p.Photo
            }).ToList();

            // Изменяем значения Photo в копии списка
            foreach (var product in copiedProducts)
            {
                product.Photo = GetImageUrl(product.Photo);
            }
            return copiedProducts;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var product = products.SingleOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            product.Photo = GetImageUrl(product.Photo);

            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var productToRemove = products.FirstOrDefault(p => p.Id == id);
            if (productToRemove != null)
            {
                products.Remove(productToRemove);
                return Ok();
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult Post([FromBody] ProductPostPut newProduct)
        {
            if (newProduct == null)
            {
                return BadRequest("Invalid data");
            }

            newProduct.Id = products.Max(p => p.Id) + 1;
            newProduct.Photo = SaveImageToFolder(newProduct.PhotoBlob);
            _context.ProductPostPuts.Add(newProduct);
            _context.SaveChanges();

            return CreatedAtAction(nameof(Get), new { id = newProduct.Id }, newProduct);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] ProductPostPut updatedProduct)
        {
            if (updatedProduct == null)
            {
                return BadRequest("Invalid data");
            }

            var existingProduct = products.SingleOrDefault(p => p.Id == id);
            if (existingProduct == null)
            {
                return NotFound();
            }

            existingProduct.Name = updatedProduct.Name;
            existingProduct.Price = updatedProduct.Price;
            existingProduct.Discount = updatedProduct.Discount;

            if (updatedProduct.PhotoBlob != null)
            {
                if (!string.IsNullOrEmpty(existingProduct.Photo))
                {
                    DeleteImage(existingProduct.Photo);
                }
                existingProduct.Photo = SaveImageToFolder(updatedProduct.PhotoBlob);
            }

            _context.SaveChanges();
            return Ok(existingProduct);
        }

        private string SaveImageToFolder(byte[] imageBytes)
        {
            string fileName = Guid.NewGuid().ToString() + ".jpg";
            string filePath = Path.Combine(_imagesFolderPath, fileName);  // убрать _imagesFolderPath
            System.IO.File.WriteAllBytes(filePath, imageBytes);
            return fileName;
        }

        private void DeleteImage(string imagePath)
        {
            string fullPath = Path.Combine(_imagesFolderPath, imagePath); // убрать _imagesFolderPath
            if (System.IO.File.Exists(fullPath))
            {
                System.IO.File.Delete(fullPath);
            }
        }

        private string GetImageUrl(string imagePath)
        {
            if (!string.IsNullOrEmpty(imagePath))
            {

                // Получаем порт текущего запроса
                var port = HttpContext.Request.Host.Port;

                // Формируем URL изображения с автоматически определенным портом
                return $"http://localhost:{port}/img/{imagePath}";
                // return $"http://192.168.1.18:{port}/img/{imagePath}"; 
            }
            return null;
        }
    }
}
