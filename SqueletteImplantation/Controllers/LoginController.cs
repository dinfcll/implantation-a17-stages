using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.Controllers
{
    public class LoginController : Controller
    {
        private readonly MaBd _maBd;

        public LoginController(MaBd maBd)
        {
            _maBd = maBd;
        }

        [HttpGet]
        [Route("api/Enseignant")]
        public IEnumerable Index()
        {
            return _maBd.Enseignant.ToList();
        }

    }
}