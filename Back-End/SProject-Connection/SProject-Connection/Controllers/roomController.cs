using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SProject_Connection.Db;
using SProject_Connection.Models;

namespace SProject_Connection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class roomController : ControllerBase
    {
        private readonly roomRepository _repository;
        public roomController(roomRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public ActionResult<IEnumerable<room>> Getroom()
        {
            var rooms = _repository.GetAll();
            return Ok(rooms);
        }
        [HttpGet("{no}")]
        public ActionResult<room> Getroom(long no)
        {
            var room = _repository.GetById(no);
            if (room == null)
            {
                return NotFound();
            }
            return Ok(room);
        }
        [HttpPost]
        public ActionResult Createroom (room Room)
        {
            _repository.create(Room);
            return CreatedAtAction(nameof(Getroom), new { no = Room.no }, Room);

        }
        [HttpPut("{no}")]
        public ActionResult Updateroom(long no , room Room)
        {
            if (no != Room.no)
            {
                return BadRequest();
            }
            _repository.update(Room);
            return NoContent();
        }
        [HttpDelete("{no}")]
        public ActionResult Deleteroom (long no)
        {
            _repository.delete(no);
            return NoContent();
        }
    }
}
