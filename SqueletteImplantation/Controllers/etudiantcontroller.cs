using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.Controllers
{
    public class EtudiantController : Controller
    {
        private readonly MaBd _maBd;

        public EtudiantController(MaBd maBd)
        {
            _maBd = maBd;
        }

        [HttpGet]
        [Route("api/EtudiantParNoDa/{NoDa}")]
        public IActionResult GetEntrepriseParNoEnt(int NoDa)
        {
            var etudiant = _maBd.Etudiant.FirstOrDefault(m => m.NoDa == NoDa);

            if (etudiant == null)
            {
                return NotFound();
            }

            return new OkObjectResult(etudiant);
        }

        [HttpGet]
        [Route("api/Etudiant/annees")]
        public IEnumerable EtudiantAnnee()//retourne tout les etudiant de l ann�e en cours
        {
            var AnneeRecente = (from b in _maBd.Etudiant 
                                select b.Annee).Max();
            return from b in _maBd.Etudiant
                   join ent in _maBd.Entreprise on b.Id equals ent.Id//nouvelle ligne
                   where b.Annee.Contains(AnneeRecente.ToString())
                   select new
                   {
                       b.NoDa,
                       b.Nom,
                       b.Prenom,
                       b.Profil,
                       b.Annee,
                       ent.nomentreprise,

                   };
                  
        }

        [HttpGet]
        [Route("api/Etudiant/RechercheAnnee/{annees}")]
        public IEnumerable EntrepriseRechercheAnnee(string annees)
        {
            return from b in _maBd.Etudiant
                   join ent in _maBd.Entreprise on b.Id equals ent.Id//nouvelle ligne
                   where b.Annee.Contains(annees.ToString())
                   select new
                   {
                       b.NoDa,
                       b.Nom,
                       b.Prenom,
                       b.Profil,
                       b.Annee,
                       ent.nomentreprise,

                   };
        }

        [HttpGet]
        [Route("api/Etudiant/RechercheSansAnnee/{recherchetxtbox}")]
        public IEnumerable Recherche(string recherchetxtbox)
        {
            return from b in _maBd.Etudiant
                   join ent in _maBd.Entreprise on b.Id equals ent.Id//nouvelle ligne
                   where
                   b.Nom.Contains(recherchetxtbox) ||
                   b.Prenom.Contains(recherchetxtbox) ||
                   b.Profil.Contains(recherchetxtbox) 
                  
                   orderby b.Annee
                   select new
                   {
                       b.NoDa,
                       b.Nom,
                       b.Prenom,
                       b.Profil,
                       b.Annee,
                       ent.nomentreprise,//nouvelle ligne

                   };
        }




        [HttpGet]
        [Route("api/Etudiant/{annees}/{recherchetxtbox}")]
        public IEnumerable Recherche(string recherchetxtbox, string annees)
        {
            return from b in _maBd.Etudiant
                   join ent in _maBd.Entreprise on b.Id equals ent.Id//nouvelle ligne
                   where b.Annee.Contains(annees) && (
                   b.Nom.Contains(recherchetxtbox) ||
                   b.Prenom.Contains(recherchetxtbox) ||
                   b.Profil.Contains(recherchetxtbox))


                   orderby b.Annee
                   select new
                   {
                       b.NoDa,
                       b.Nom,
                       b.Prenom,
                       b.Profil,
                       b.Annee,
                       ent.nomentreprise,//nouvelle ligne

                   };
        }




        [HttpGet]
        [Route("api/Etudiant/RemplirComboAnnee")]
        public IEnumerable ListeAnnees()
        {
            return (from b in _maBd.Etudiant
                    orderby b.Annee descending
                    select b.Annee).Distinct();
        }


        [HttpGet]
        [Route("api/Enseignant/{NoEns}")]
        public IEnumerable ListeEtudiantSuiviParUnEnseignant( int  NoEns)//liste étudiant suivi par un enseignant
        {
            return from b in _maBd.RelEnseignantEtudiant
                    join etud in _maBd.Etudiant on b.NoDa equals etud.NoDa//nouvelle ligne
                    where
                    b.NoEnseignant == NoEns


                    select new
                    {
                        etud.NoDa,
                        etud.Nom,


                    };
            
        }

        [HttpGet]
        [Route("api/EtudiantList/{NoDa}")]
        public IEnumerable ListeEnseignantQuiSuitUnEtudiant(int NoDa)//liste des enseignant qui suit un étudiant
        {
            return from b in _maBd.RelEnseignantEtudiant
                   join ens in _maBd.Enseignant on b.NoEnseignant equals ens.NoEnseignant//nouvelle ligne
                   where
                   b.NoDa == NoDa


                   select new
                   {
                      
                       ens.Nom,


                   };
            

        }


        [HttpPost]
        [Route("api/Etudiant/EnregistrementEtudiantbd")]
        public IActionResult EnregistrementEtudiantbd(Etudiant Etudiant)
        {
            var resultat = _maBd.Etudiant.Add(Etudiant);
            _maBd.SaveChanges();
            return new OkObjectResult(Etudiant);


        }


        [HttpPut]
        [Route("api/Etudiant/ModifierEtudiant")]
        public IActionResult ModificationEtudiantbd([FromBody]Etudiant etudiant)
        {
            var resultat = _maBd.Etudiant.Update(etudiant);
            _maBd.SaveChanges();
            if (resultat == null)
                return NotFound();
            return new OkResult();
        }


        [HttpDelete]
        [Route("api/Etudiant/SupprimerEtudiant/{ID}")]
        public IActionResult SuprimeEtudiantbd(int ID)
        {
            Etudiant etudiant = new Etudiant() { NoDa = ID };
            _maBd.Etudiant.Attach(etudiant);
            var resultat = _maBd.Etudiant.Remove(etudiant);
            _maBd.SaveChanges();
            if (resultat == null)
                return NotFound();
            return new OkResult();
        }




        

        [HttpGet]
        [Route("api/Etudiant/RemplirComboAnneeEtudiant")]//pour le dropdown qui affectera un etudiant dans une entreprise
        public IEnumerable ListeAnnee()
        {
            return (from b in _maBd.Etudiant
                    orderby b.Annee descending
                    select b.Annee).Distinct();
        }
        /*****************************************/
        [HttpGet]
        [Route("api/Etudiant/ObtenirIDentrepriseApartirDeSonNom")]
        public IActionResult GetEntreprise(string NomEntr)
        {
            var entreprise = _maBd.Entreprise.FirstOrDefault(m => m.nomentreprise == NomEntr);

            if (entreprise == null)
            {
                return NotFound();
            }

            return new OkObjectResult(entreprise);
        }

        








    }
}
