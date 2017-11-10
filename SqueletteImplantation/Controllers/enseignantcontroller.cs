using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;


namespace SqueletteImplantation.Controllers
{
    public class EnseignantController:Controller
    {

        private readonly MaBd _maBd;

        public EnseignantController(MaBd maBd)
        {
            _maBd = maBd;
        }












        //apres on fait le update de la bd etudiant pour placer l id de son entreprise

        /**********************************************/
        [HttpPost]
        [Route("api/Enseignant/EnregistrementEnseignantbd")]
        public IActionResult EnregistrementEnseignantbd(Enseignant Enseignant)
        {
            var resultat = _maBd.Enseignant.Add(Enseignant);
            _maBd.SaveChanges();
            return new OkObjectResult(Enseignant);


        }


        [HttpPut]
        [Route("api/Enseignant/ModifierEnseignant")]
        public IActionResult ModificationEnseignantbd([FromBody]Enseignant enseignant)
        {
            var resultat = _maBd.Enseignant.Update(enseignant);
            _maBd.SaveChanges();
            if (resultat == null)
                return NotFound();
            return new OkResult();
        }


        [HttpDelete]
        [Route("api/Enseignant/SupprimerEnseignant/{ID}")]
        public IActionResult SuprimeEnseignantbd(int ID)
        {
            Enseignant enseignant = new Enseignant() { NoEnseignant = ID };
            _maBd.Enseignant.Attach(enseignant);
            var resultat = _maBd.Enseignant.Remove(enseignant);
            _maBd.SaveChanges();
            if (resultat == null)
                return NotFound();
            return new OkResult();
        }

        /****************************************************/

        [HttpPost]
        [Route("api/Enseignant/EnregistrementRelEnseignantEtudiantbd")]
        public IActionResult EnregistrementRelEnseignantEtudiantbd(RelEnseignantEtudiant EnsEtu)
        {
            var resultat = _maBd.RelEnseignantEtudiant.Add(EnsEtu);
            _maBd.SaveChanges();
            return new OkObjectResult(EnsEtu);


        }

        [HttpPost]
        [Route("api/Enseignant/EnregistrementRelEnseignantEtudiantbd")]
        public IActionResult EnregistrementRelEnseignantEntreprisetbd(RelEnseignantEntreprise EnsEnt)
        {
            var resultat = _maBd.RelEnseignantEntreprise.Add(EnsEnt);
            _maBd.SaveChanges();
            return new OkObjectResult(EnsEnt);


        }


        [HttpGet]
        [Route("api/Enseignant/ListeEnseignant")]
        public IEnumerable EntrepriseRechercheAnnee()
        {
            return from b in _maBd.Enseignant
                  
                   select b;
        }








    }
}
