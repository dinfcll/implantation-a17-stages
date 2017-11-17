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
        [Route("api/relEnseignantEtudiant/SupprimerRelensetu/{ID}/{NOENS}")]
        public IActionResult SupprimerelEnseignantEtudiant(int ID, int NOENS)
        {
           
                
                    RelEnseignantEtudiant relensetu = new RelEnseignantEtudiant() { NoDa = ID, NoEnseignant= NOENS };
                    _maBd.RelEnseignantEtudiant.Attach(relensetu);
                    var resultat = _maBd.RelEnseignantEtudiant.Remove(relensetu);
                    _maBd.SaveChanges();
                
            
            
            if (resultat == null)
                return NotFound();
            return new OkResult();
        }




        











        [HttpPost]
        [Route("api/Enseignant/sauvegardeRelEnseignantEtudiantbd")]
        public IActionResult EnregistrementRelEnseignantEtudiantbd([FromBody]RelEnseignantEtudiant EnsEtu)
        {
            var resultat = _maBd.RelEnseignantEtudiant.Add(EnsEtu);
            _maBd.SaveChanges();
            if (resultat == null)
                return NotFound();
            return new OkObjectResult(EnsEtu);


        }

    }
}