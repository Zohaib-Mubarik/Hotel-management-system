using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SProject_Connection.Db;
using SProject_Connection.Models;

namespace SProject_Connection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class reservationController : ControllerBase
    {
        private readonly reservationRepository _repository;
        public reservationController(reservationRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public ActionResult<IEnumerable<reservation>> Getreservation()
        {
            var reservation = _repository.GetAll();
            return Ok(reservation);
        }
        [HttpGet("{reservationid}")]
        public ActionResult<reservation> Getreservation(long reservationid)
        {
            var reservation = _repository.GetById(reservationid);
            if (reservation == null)
            {
                return NotFound();
            }
            return Ok(reservation);
        }
        [HttpPost]
        public ActionResult Createreservation(reservation Reservation)
        {
            _repository.create(Reservation);
            return CreatedAtAction(nameof(Getreservation), new { reservationid = Reservation.reservationid }, Reservation);

        }
        [HttpPut("{reservationid}")]
        public ActionResult Updatereservation(long reservationid, reservation Reservation)
        {
            if (reservationid != Reservation.reservationid)
            {
                return BadRequest();
            }
            _repository.update(Reservation);
            return NoContent();
        }
        [HttpDelete("{reservationid}")]
        public ActionResult Deletereservation(long reservationid)
        {
            _repository.delete(reservationid);
            return NoContent();
        }
    }
}
