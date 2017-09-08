using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.Controllers
{
    public class ProfesseurController : Controller
    {
        private readonly MaBd _maBd;

        public ProfesseurController(MaBd maBd)
        {
            _maBd = maBd;
        }

        [HttpGet]
        [Route("api/Professeur")]
        public IEnumerable Index()
        {
            return _maBd.Professeur.ToList();
        }

       /* [HttpPost]
        [Route("api/Professeur")]
        public IActionResult Create(ProfesseurDto ProfesseurDto)
        {
            var Professeur = ProfesseurDto.CreateProfesseur();
            _maBd.Professeur.Add(Professeur);
            _maBd.SaveChanges();

            return new OkObjectResult(Professeur);
        }*/

       /* [HttpGet]
        [Route("api/Professeur/{id}")]
        public IActionResult GetProfesseur(int id)
        {
            var Professeur = _maBd.Professeur.FirstOrDefault(m => m.Id == id);

            if (Professeur == null)
            {
                return NotFound();
            }

            return new OkObjectResult(Professeur);
        }

        [HttpPut]
        [Route("api/Professeur/{id}")]
        public IActionResult ModifyProfesseur(Professeur updatedProfesseur)
        {
            var Professeur = _maBd.Professeur.FirstOrDefault(m => m.Id == updatedProfesseur.Id);

            if (Professeur == null)
            {
                return NotFound();
            }

            _maBd.Entry(Professeur).CurrentValues.SetValues(updatedProfesseur);

            return new OkResult();
        }

        [HttpDelete]
        [Route("api/Professeurs/{id}")]
        public IActionResult DeleteProfesseur(int id)
        {
            var Professeur = _maBd.Professeur.FirstOrDefault(m => m.Id == id);

            if (Professeur == null)
            {
                return NotFound();
            }

            _maBd.Remove(Professeur);
            _maBd.SaveChanges();

            return new OkResult();
        }*/

    }
}