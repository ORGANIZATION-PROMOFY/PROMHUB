using Microsoft.AspNetCore.Mvc;
using PROMHUB.Data.Models;

namespace PROMHUB.Controllers
{
    [Route("api/[controller]")]
    
    public class UsersController : Controller
    {
        private static List<User> users = new List<User>(new[] {
        new User() { Id = 1, Name = "Alex", Surname = "Alexvvdd" },
        new User() { Id = 2, Name = "Ostin", Surname = "Ostindvss" },
        new User() { Id = 3, Name = "Alice", Surname = "Alicefffdfd" },
});


        [HttpGet]
        public IEnumerable<User> Get() => users;



        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var product = users.SingleOrDefault(p => p.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            users.Remove(users.SingleOrDefault(p => p.Id == id));
            return Ok();
        }
        

        [HttpPost]
        public IActionResult Post([FromBody] User newUser)
        {
            if (newUser == null)
            {
                return BadRequest("Invalid data");
            }

            newUser.Id = users.Max(p => p.Id) + 1;

            users.Add(newUser);

            return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
        }


        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] User updatedUser)
        {
            if (updatedUser == null)
            {
                return BadRequest("Invalid data");
            }

            var existingUser = users.SingleOrDefault(p => p.Id == id);

            if (existingUser == null)
            {
                return NotFound();
            }

            // Обновляем данные пользователя
            existingUser.Name = updatedUser.Name;
            existingUser.Surname = updatedUser.Surname;

            return Ok(existingUser);
        }


        //public IActionResult Index()
        //{
        //    return View();
        //}
    }
}
