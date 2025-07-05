using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SProject_Connection.Db;
using SProject_Connection.Models;

namespace SProject_Connection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class hotelController : ControllerBase
    {
        private readonly hotelRepository _repository;
        public hotelController(hotelRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public ActionResult<IEnumerable<hotel>> Gethotel()
        {
            var hotels = _repository.GetAll();
            return Ok(hotels);
        }
        [HttpGet("{id}")]
        public ActionResult<hotel> Gethotel(long id)
        {
            var hotel = _repository.GetById(id);
            if (hotel == null)
            {
                return NotFound();
            }
            return Ok(hotel);
        }
        [HttpPost]
        public ActionResult Createhotel(hotel Hotel)
        {
            _repository.create(Hotel);
            return CreatedAtAction(nameof(Gethotel), new { id = Hotel.id }, Hotel);

        }
        [HttpPut("{id}")]
        public ActionResult Updatehotel(long id, hotel Hotel)
        {
            if (id != Hotel.id)
            {
                return BadRequest();
            }
            _repository.update(Hotel);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public ActionResult Deletehotel(long id)
        {
            _repository.delete(id);
            return NoContent();
        }



    }
}
