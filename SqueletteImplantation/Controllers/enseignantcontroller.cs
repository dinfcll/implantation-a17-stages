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












        //apres on fait le update de la bd etudiant pour placer l'id de son entreprise

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
        [Route("api/Enseignant/EnregistrementRelEnseignantEntreprisebd")]
        public IActionResult EnregistrementRelEnseignantEntreprisetbd([FromBody]RelEnseignantEntreprise EnsEnt)
        {
            var resultat = _maBd.RelEnseignantEntreprise.Add(EnsEnt);
            _maBd.SaveChanges();
            if (resultat == null)
                return NotFound();
            return new OkObjectResult(EnsEnt);


        }


        [HttpGet]
        [Route("api/Enseignant/ListeEnseignant")]
        public IEnumerable EntrepriseRechercheAnnee()
        {
            return from b in _maBd.Enseignant
                  
                   select b;
        }


        [HttpGet]
        [Route("api/Enseignant/{NoEns}")]
        public IActionResult GetEnseignantParNoEns(int NoEns)
        {
            var enseignant = _maBd.Enseignant.FirstOrDefault(m => m.NoEnseignant == NoEns);

            if (enseignant == null)
            {
                return NotFound();
            }

            return new OkObjectResult(enseignant);
        }



        [HttpGet]
        [Route("api/EnseignantNomEns/{NomEns}")]
        public IActionResult GetEnseignantParNom(string NomEns)
        {
            var enseignant = _maBd.Enseignant.FirstOrDefault(m => m.Nom == NomEns);

            if (enseignant == null)
            {
                return NotFound();
            }

            return new OkObjectResult(enseignant);
        }

        [HttpGet]
        [Route("api/Enseignant/RemplirComboEnseignant")]//pour le dropdown qui affectera un etudiant à un enseignant
        public IEnumerable ListeEnseignant()
        {
            return (from b in _maBd.Enseignant
                    
                    select b.Nom).Distinct();
        }










    }
}
