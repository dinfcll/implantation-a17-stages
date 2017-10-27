using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;
using System.Collections.Generic;

namespace SqueletteImplantation.Controllers
{

    public class entreprisecontroller : Controller
    {
        private readonly MaBd _maBd;

        public entreprisecontroller(MaBd maBd)
        {
            _maBd = maBd;
        }

        [HttpGet]
        [Route("api/Entreprise/annees")]
        public IEnumerable EntrepriseAnnee()
        {
            var AnneeRecente = (from b in _maBd.Entreprise
                                select b.date).Max();
            return from b in _maBd.Entreprise
                   where b.date.Contains(AnneeRecente.ToString())
                   select b;
        }

        [HttpGet]
        [Route("api/Entreprise/RechercheAnnee/{annees}")]
        public IEnumerable EntrepriseRechercheAnnee(string annees)
        {
            return from b in _maBd.Entreprise
                   where b.date.Contains(annees.ToString())
                   select b;
        }

        [HttpGet]
        [Route("api/Entreprise/RechercheSansAnnee/{recherchetxtbox}")]
        public IEnumerable Recherche(string recherchetxtbox)
        {
            return from b in _maBd.Entreprise
                   where
                   b.Lieu.Contains(recherchetxtbox) ||
                   b.NoTel.Contains(recherchetxtbox) ||
                   b.PersonneResponsable.Contains(recherchetxtbox) ||
                   b.Poste.Contains(recherchetxtbox)
                   orderby b.date
                   select new
                   {
                       b.NomEntreprise,
                       b.Lieu,
                       b.NoTel,
                       b.Poste,
                       b.PersonneResponsable,
                       b.NbreNon,
                       b.NbreOui,
                       b.CourrielRes,
                       b.date
                   };
        }

        [HttpGet]
        [Route("api/Entreprise/{annees}/{recherchetxtbox}")]
        public IEnumerable Recherche(string recherchetxtbox, string annees)
        {
            return from b in _maBd.Entreprise
                   where b.date.Contains(annees) && (
                   b.Lieu.Contains(recherchetxtbox) ||
                   b.NoTel.Contains(recherchetxtbox) ||
                   b.PersonneResponsable.Contains(recherchetxtbox) ||
                   b.Poste.Contains(recherchetxtbox))
                   orderby b.date
                   select new
                   {
                       b.NomEntreprise,
                       b.Lieu,
                       b.NoTel,
                       b.Poste,
                       b.PersonneResponsable,
                       b.NbreNon,
                       b.NbreOui,
                       b.CourrielRes,
                       b.date
                   };
        }

        [HttpGet]
        [Route("api/Entreprise/RemplirCombo")]
        public IEnumerable ListeAnnees()
        {
            return (from b in _maBd.Entreprise
                    orderby b.date descending
                    select b.date).Distinct();
        }


        [HttpGet]
        [Route("api/Entreprise/{NoEnt}")]
        public IActionResult GetEntrepriseParNoEnt(int NoEnt)
        {
            var entreprise = _maBd.Entreprise.FirstOrDefault(m => m.Id == NoEnt);

            if (entreprise == null)
            {
                return NotFound();
            }

            return new OkObjectResult(entreprise);
        }

    [HttpPost]
        [Route("api/Entreprise/Enregistrementbd")]
        public IActionResult Enregistrementbd(Entreprise Entreprise)
        {
            var resultat = _maBd.Entreprise.Add(Entreprise);
            _maBd.SaveChanges();
            return new OkObjectResult(Entreprise);


        }       
        [HttpPut]
        [Route("api/Entreprise/Modifier")]
        public IActionResult Modificationbd([FromBody]Entreprise entreprise)
        {
            var resultat = _maBd.Entreprise.Update(entreprise);
            _maBd.SaveChanges();
            if (resultat == null)
                return NotFound();
            return new OkResult();
        }

        [HttpDelete]
        [Route("api/Entreprise/Supprimer/{ID}")]
        public IActionResult SuprimeEntreprisebd(int ID)
        {
            Entreprise entreprise = new Entreprise() { Id = ID };
            _maBd.Entreprise.Attach(entreprise);
           var resultat= _maBd.Entreprise.Remove(entreprise);
            _maBd.SaveChanges();
            if (resultat == null)
                return NotFound();
            return new OkResult();
        }
        [HttpPost]
        [Route("api/Entreprise/Ajouter")]
        public IActionResult AjouterEntreprise([FromBody]Entreprise entreprise)
        {
            var Result = _maBd.Entreprise.Add(entreprise);
             _maBd.SaveChanges();
            if (Result == null)
                return NotFound();
            return new OkResult();

        }

    }
}

