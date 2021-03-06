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

        [HttpPost]
        [Route("api/Enseignant")]
        public IActionResult LoginEnseignant([FromBody] EnseignantDto ens  )
        {
           var obj = _maBd.Enseignant.FirstOrDefault(m => m.Courriel == ens.Courriel && m.MotDePasse == ens.MotDePasse);
           if(obj == null)
           {
               return new OkObjectResult(null);
           }
            return new OkObjectResult(obj);
        }




        [HttpPost]
        [Route("api/Etudiant")]
        public IActionResult LoginEtudiant([FromBody] EtudiantDto etu)
        {
            var obj = _maBd.Etudiant.FirstOrDefault(m => m.NoDa == etu.NoDa && m.MotPasse == etu.MotPasse);
            if (obj == null)
            {
                return new OkObjectResult(null);
            }
            return new OkObjectResult(obj);
        }















    }
}