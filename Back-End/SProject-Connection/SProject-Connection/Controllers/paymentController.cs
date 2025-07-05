using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SProject_Connection.Db;
using SProject_Connection.Models;

namespace SProject_Connection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class paymentController : ControllerBase
    {
        private readonly paymentRepository _repository;
        public paymentController(paymentRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public ActionResult<IEnumerable<payment>> Getpayment()
        {
            var payments = _repository.GetAll();
            return Ok(payments);
        }
        [HttpGet("{pay_no}")]
        public ActionResult<payment> Getpayment(long pay_no)
        {
            var payment = _repository.GetById(pay_no);
            if (payment == null)
            {
                return NotFound();
            }
            return Ok(payment);
        }
        [HttpPost]
        public ActionResult Createpayment(payment Payment)
        {
            _repository.create(Payment);
            return CreatedAtAction(nameof(Getpayment), new { pay_no = Payment.pay_no }, Payment);

        }
        [HttpPut("{pay_no}")]
        public ActionResult Updatepayment(long pay_no, payment Payment)
        {
            if (pay_no != Payment.pay_no)
            {
                return BadRequest();
            }
            _repository.update(Payment);
            return NoContent();
        }
        [HttpDelete("{pay_no}")]
        public ActionResult Deletepayment(long pay_no)
        {
            _repository.delete(pay_no);
            return NoContent();
        }
    }
}
