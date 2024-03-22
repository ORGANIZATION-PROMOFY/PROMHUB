using Microsoft.AspNetCore.Mvc;
using PROMHUB.Data.Models;
using System.Collections.Generic;
using System.Linq;

namespace PROMHUB.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private static List<Product> products = new List<Product>(new[] {
            new Product() { Id = 1, Name = "Product A", Price = 100.0, Discount = 10 },
            new Product() { Id = 2, Name = "Product B", Price = 50.0, Discount = 5 },
            new Product() { Id = 3, Name = "Product C", Price = 75.0, Discount = 0 }
        });

        [HttpGet]
        public IEnumerable<Product> Get() => products;

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var product = products.SingleOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            products.Remove(products.SingleOrDefault(p => p.Id == id));
            return Ok();
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product newProduct)
        {
            if (newProduct == null)
            {
                return BadRequest("Invalid data");
            }
            newProduct.Id = products.Max(p => p.Id) + 1;
            products.Add(newProduct);
            return CreatedAtAction(nameof(Get), new { id = newProduct.Id }, newProduct);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Product updatedProduct)
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
            // Обновляем данные продукта
            existingProduct.Name = updatedProduct.Name;
            existingProduct.Price = updatedProduct.Price;
            existingProduct.Photo = updatedProduct.Photo;
            existingProduct.Discount = updatedProduct.Discount;
            return Ok(existingProduct);
        }
    }
}
