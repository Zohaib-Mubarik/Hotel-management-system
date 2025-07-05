using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SProject_Connection.Db;
using SProject_Connection.Models;

namespace SProject_Connection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class roomcategoryController : ControllerBase
    {
        private readonly roomcategoryRepository _repository;
        public roomcategoryController(roomcategoryRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public ActionResult<IEnumerable<roomcategory>> Getcustomer()
        {
            var roomcategorys = _repository.GetAll();
            return Ok(roomcategorys);
        }
        [HttpGet("{id}")]
        public ActionResult<roomcategory> Getcustomer(long id)
        {
            var roomcategory = _repository.GetById(id);
            if (roomcategory == null)
            {
                return NotFound();
            }
            return Ok(roomcategory);
        }
    }
}
