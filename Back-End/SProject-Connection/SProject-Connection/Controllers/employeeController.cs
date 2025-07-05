using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SProject_Connection.Db;
using SProject_Connection.Models;

namespace SProject_Connection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class employeeController : ControllerBase
    {
        private readonly employeeRepository _repository;
        public employeeController(employeeRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public ActionResult<IEnumerable<employee>> Getemployee()
        {
            var employees = _repository.GetAll();
            return Ok(employees);
        }
        [HttpGet("{id}")]
        public ActionResult<employee> Getemployee(long id)
        {
            var employee = _repository.GetById(id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }
        [HttpPost]
        public ActionResult Createemployee(employee Employee)
        {
            _repository.create(Employee);
            return CreatedAtAction(nameof(Getemployee), new { id = Employee.id }, Employee);

        }
        [HttpPut("{id}")]
        public ActionResult Updateemployee(long id, employee Employee)
        {
            if (id != Employee.id)
            {
                return BadRequest();
            }
            _repository.update(Employee);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public ActionResult Deleteemployee(long id)
        {
            _repository.delete(id);
            return NoContent();
        }
    }
}
