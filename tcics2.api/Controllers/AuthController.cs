using Microsoft.AspNetCore.Mvc;
using tcics2.api.Models;

namespace tcics2.api.Controllers
{
    [ApiController]
    [Route("api")]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            const string username = "admin";
            const string password = "123";

            if (request.Username == username && request.Password == password)
            {
                return Ok(new LoginResponse
                {
                    Message = "Login successful",
                    Token = "fake-jwt-token"
                });
            }

            return Unauthorized(new { message = "Invalid credentials" });
        }
    }
}