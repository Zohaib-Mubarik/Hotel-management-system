using SProject_Connection.Db;
using SProject_Connection.Models;
using SProject_Connection.Security;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SProject_Connection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserRepository _repository;
        private readonly IJwtTokenService _jwtTokenService;

        public UserController(UserRepository repository, IJwtTokenService jwtTokenService)
        {
            _repository = repository;
            _jwtTokenService = jwtTokenService;
        }
        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<UserController>/5
        [HttpPost]
        public ActionResult AuthenticateUser(User u)
        {

            User user = _repository.GetByUsernamePass(u.username, u.password);
            if (user != null)
            {
                var token = _jwtTokenService.GenerateToken(u.username);
                return Ok(new { Token = token });
            }
            else
                return NotFound();
        }



        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
