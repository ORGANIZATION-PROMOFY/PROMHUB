using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PROMHUB.Data;
using PROMHUB.Data.Models;
using System.Collections.Generic;
using System.Linq;

namespace PROMHUB.Controllers
{
    [Route("api/[controller]")]
    public class ProductListController : Controller
    {
        private readonly AppDbContext _context;

        public ProductListController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<ProductList>> GetAsync()
        {
            return await _context.ProductList.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var distributor = await _context.ProductList.FindAsync(id);
            if (distributor == null)
            {
                return NotFound();
            }
            return Ok(distributor);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] ProductListInputModel productListInput)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newProductList = new ProductList
            {
                Quantity = productListInput.Quantity,
                UserId = productListInput.UserId,
                ProductId = productListInput.ProductId
            };

            _context.ProductList.Add(newProductList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAsync", new { id = newProductList.Id }, newProductList);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsync(int id, [FromBody] ProductListInputModel productListInput)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productListToUpdate = await _context.ProductList.FindAsync(id);
            if (productListToUpdate == null)
            {
                return NotFound();
            }

            productListToUpdate.Quantity = productListInput.Quantity;
            productListToUpdate.UserId = productListInput.UserId;
            productListToUpdate.ProductId = productListInput.ProductId;

            _context.ProductList.Update(productListToUpdate);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var productList = await _context.ProductList.FindAsync(id);
            if (productList == null)
            {
                return NotFound();
            }

            _context.ProductList.Remove(productList);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
