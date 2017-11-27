using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;
using System.Collections.Generic;
using System;

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
        public IActionResult EntrepriseAnnee()
        {
            var AnneeRecente = (from b in _maBd.Entreprise select b.date).Max();
            var resultat =from b in _maBd.Entreprise
                   where b.date.Contains(AnneeRecente.ToString())
                   select b;
            if (resultat == null)
                return NotFound();
            return new OkObjectResult(resultat);
        }

        [HttpGet]
        [Route("api/Entreprise/RechercheAnnee/{annees}")]
        public IActionResult EntrepriseRechercheAnnee(string annees)
        {
                var Resultat = from b in _maBd.Entreprise
                   where b.date.Contains(annees.ToString())
                   select b;
            if (Resultat == null)
                return NotFound();
            return new OkObjectResult(Resultat);
        }

        [HttpGet]
        [Route("api/Entreprise/RechercheSansAnnee/{recherchetxtbox}")]
        public IActionResult Recherche(string recherchetxtbox)
        {
            recherchetxtbox = recherchetxtbox.ToUpper();
            var Resultat = from b in _maBd.Entreprise
                   where
                   b.lieu.ToUpper().Contains(recherchetxtbox) ||
                   b.notel.ToUpper().Contains(recherchetxtbox) ||
                   b.personneresponsable.ToUpper().Contains(recherchetxtbox) ||
                   b.poste.ToUpper().Contains(recherchetxtbox)
                   || b.nomentreprise.ToUpper().Contains(recherchetxtbox)
                   orderby b.date
                   select new
                   {
                       b.nomentreprise,
                       b.lieu,
                       b.notel,
                       b.poste,
                       b.personneresponsable,
                       b.nbrenon,
                       b.nbreoui,
                       b.courrielres,
                       b.date,
                       b.Id
                   };
            if (Resultat == null)
                return NotFound();
            return new OkObjectResult(Resultat);
        }

        [HttpGet]
        [Route("api/Entreprise/{annees}/{recherchetxtbox}")]
        public IActionResult Recherche(string recherchetxtbox, string annees)
        {
            recherchetxtbox = recherchetxtbox.ToUpper();
            var Resultat= from b in _maBd.Entreprise
                   where b.date.Contains(annees) && (
                   b.lieu.ToUpper().Contains(recherchetxtbox) ||
                   b.notel.ToUpper().Contains(recherchetxtbox) ||
                   b.personneresponsable.ToUpper().Contains(recherchetxtbox) ||
                   b.poste.ToUpper().Contains(recherchetxtbox))
                   || b.nomentreprise.ToUpper().Contains(recherchetxtbox)
                   orderby b.date
                   select new
                   {
                       b.nomentreprise,
                       b.lieu,
                       b.notel,
                       b.poste,
                       b.personneresponsable,
                       b.nbrenon,
                       b.nbreoui,
                       b.courrielres,
                       b.date,
                       b.Id
                   };
            if (Resultat == null)
            {
                return NotFound();
            }
            return new OkObjectResult(Resultat);
        }

        [HttpGet]
        [Route("api/Entreprise/RemplirCombo")]
        public IActionResult ListeAnnees()
        {
            var Resultat = (from b in _maBd.Entreprise
                    orderby b.date descending
                    select b.date).Distinct();
            if (Resultat == null)
            {
                return NotFound();
            }
             return new OkObjectResult(Resultat);
        }
        [HttpGet]
        [Route("api/EntrepriseNomEnt/{NomEnt}")]
        public IActionResult GetEntrepriseParNom(string NomEnt)
        {
            var entreprise = _maBd.Entreprise.FirstOrDefault(m => m.nomentreprise == NomEnt);

            if (entreprise == null)
            {
                return NotFound();
            }
            return new OkObjectResult(entreprise);
        }
        [HttpGet]
        [Route("api/Etudiant/RemplirComboEntreprise")]//pour le dropdown qui affectera un etudiant dans une entreprise
        public IEnumerable ListeEntreprise()
        {
            return (from b in _maBd.Entreprise
                    orderby b.date descending
                    select b.nomentreprise).Distinct();
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
            Entreprise.Id = null;
            var resultat = _maBd.Entreprise.Add(Entreprise);
            _maBd.SaveChanges();
            return new OkObjectResult(Entreprise);
        }
        [HttpGet]
        [Route("api/Entreprise/VérifAnneeCourante/{nomentreprise}")]
        public IActionResult VérifEntrepriseAnneeCourante(string nomentreprise)
        {
            DateTime DateAujourdhui = DateTime.Now;
            string Date = DateAujourdhui.Year.ToString();
            var EntrepriseExistante = from b in _maBd.Entreprise
                                      where b.nomentreprise.ToUpper() == nomentreprise.ToUpper()
                                      && b.date == Date
                                      select b.Id;
            if (EntrepriseExistante.Any())
                return NoContent();
            return new OkResult(); 
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
            var entreprise = _maBd.Entreprise.FirstOrDefault(x => x.Id == ID);
            if (entreprise == null)
                return new NoContentResult();
            var etudiant = _maBd.Etudiant.FirstOrDefault(x => x.Id == ID);
            if (etudiant != null)
                return NoContent();
            var resultat = _maBd.Entreprise.Remove(entreprise);
            _maBd.SaveChanges();
            return new OkResult();

        }
        [HttpPost]
        [Route("api/Entreprise/Ajouter")]
        public IActionResult AjouterEntreprise([FromBody]Entreprise entreprise)
        {
            entreprise.Id = null;
            var Result = _maBd.Entreprise.Add(entreprise);
             _maBd.SaveChanges();
            if (Result == null)
                return NotFound();
            return new OkResult();
        }

    }
}

