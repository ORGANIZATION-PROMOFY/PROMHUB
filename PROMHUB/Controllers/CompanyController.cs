using Microsoft.AspNetCore.Mvc;
using PROMHUB.Data.Models;
using System.Collections.Generic;
using System.Linq;

namespace PROMHUB.Controllers
{
    [Route("api/[controller]")]
    public class CompanyController : Controller
    {
        private static List<Company> companies = new List<Company>(new[] {
            new Company() { Id = 1, Name = "Company A" },
            new Company() { Id = 2, Name = "Company B" },
            new Company() { Id = 3, Name = "Company C" }
        });

        [HttpGet]
        public IEnumerable<Company> Get() => companies;

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var company = companies.SingleOrDefault(p => p.Id == id);
            if (company == null)
            {
                return NotFound();
            }
            return Ok(company);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            companies.Remove(companies.SingleOrDefault(p => p.Id == id));
            return Ok();
        }

        [HttpPost]
        public IActionResult Post([FromBody] Company newCompany)
        {
            if (newCompany == null)
            {
                return BadRequest("Invalid data");
            }
            newCompany.Id = companies.Max(p => p.Id) + 1;
            companies.Add(newCompany);
            return CreatedAtAction(nameof(Get), new { id = newCompany.Id }, newCompany);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Company updatedCompany)
        {
            if (updatedCompany == null)
            {
                return BadRequest("Invalid data");
            }
            var existingCompany = companies.SingleOrDefault(p => p.Id == id);
            if (existingCompany == null)
            {
                return NotFound();
            }
            // Обновляем данные компании
            existingCompany.Name = updatedCompany.Name;
            // Добавьте здесь обновление других свойств компании при необходимости
            return Ok(existingCompany);
        }
    }
}
