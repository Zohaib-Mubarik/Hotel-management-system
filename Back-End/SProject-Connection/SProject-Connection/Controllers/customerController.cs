using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SProject_Connection.Db;
using SProject_Connection.Models;

namespace SProject_Connection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class customerController : ControllerBase
    {
        private readonly customerRepository _repository;
        public customerController(customerRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public ActionResult<IEnumerable<customer>> Getcustomer()
        {
            var customers = _repository.GetAll();
            return Ok(customers);
        }
        [HttpGet("{id}")]
        public ActionResult<customer> Getcustomer(long id)
        {
            var customer = _repository.GetById(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }
        [HttpPost]
        public ActionResult Createcustomer(customer Customer)
        {
            _repository.create(Customer);
            return CreatedAtAction(nameof(Getcustomer), new { id = Customer.id }, Customer);

        }
        [HttpPut("{id}")]
        public ActionResult Updatecustomer(long id, customer Customer)
        {
            if (id != Customer.id)
            {
                return BadRequest();
            }
            _repository.update(Customer);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public ActionResult Deletecustomer(long id)
        {
            _repository.delete(id);
            return NoContent();
        }
    }
}
