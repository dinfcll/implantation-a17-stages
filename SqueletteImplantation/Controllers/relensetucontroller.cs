using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.Controllers
{
    public class EnseignantEtudiantController : Controller
    {
        private readonly MaBd _maBd;

        public EnseignantEtudiantController(MaBd maBd)
        {
            _maBd = maBd;
        }

        [HttpDelete]
        [Route("api/relEnseignantEtudiant/SupprimerPlusieurRelensetu/{ID}")]
        public IActionResult SupprimerelEnseignantEtudiant(int ID)
        {
            var qry = from b in _maBd.RelEnseignantEtudiant
                      where b.NoDa==ID
                      select b;
            if (qry == null)
            {
                return NotFound();
            }
            else
            {

                foreach (var p in qry)
                {
                    RelEnseignantEtudiant relensetu = new RelEnseignantEtudiant() { NoDa = p.NoDa };
                    _maBd.RelEnseignantEtudiant.Attach(relensetu);
                    var resultat = _maBd.RelEnseignantEtudiant.Remove(relensetu);
                    _maBd.SaveChanges();
                }
            }
            
            if (qry == null)
                return NotFound();
            return new OkResult();
        }

        [HttpPost]
        [Route("api/Enseignant/EnregistrementRelEnseignantEtudiantbd")]
        public IActionResult EnregistrementRelEnseignantEtudiantbd(RelEnseignantEtudiant EnsEtu)
        {
            var resultat = _maBd.RelEnseignantEtudiant.Add(EnsEtu);
            _maBd.SaveChanges();
            return new OkObjectResult(EnsEtu);


        }

    }
}