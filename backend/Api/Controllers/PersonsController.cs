using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Api.Data;
using Api.Models;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PersonsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/persons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Person>>> GetPersons()
        {
            return await _context.Persons.ToListAsync();
        }

        // POST: api/persons
        [HttpPost]
        public async Task<ActionResult<Person>> CreatePerson(Person person)
        {
            _context.Persons.Add(person);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersons), new { id = person.Id }, person);
        }
    }
}
