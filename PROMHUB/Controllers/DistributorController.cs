using Microsoft.AspNetCore.Mvc;
using PROMHUB.Data;
using PROMHUB.Data.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace PROMHUB.Controllers
{
    [Route("api/[controller]")]
    public class DistributorController : Controller
    {
        private readonly AppDbContext _context;

        public DistributorController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Distributor>> GetAsync()
        {
            return await _context.Distributor.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var distributor = await _context.Distributor.FindAsync(id);
            if (distributor == null)
            {
                return NotFound();
            }
            return Ok(distributor);
        }
    }
}
