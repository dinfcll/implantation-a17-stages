using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;
using System.Collections.Generic;

namespace SqueletteImplantation.Controllers
{

    public class entreprisecontoller : Controller
    {
        private readonly MaBd _maBd;

        public entreprisecontoller(MaBd maBd)
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
                   { b.NomEntreprise,
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
                   { b.NomEntreprise,
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
        [Route("api/Entreprise/InfoParID/{ID}")]
        public object InfoParID(int ID)
        {
            return from b in _maBd.Entreprise
                   where b.NoEntreprise == ID
                   select b;
        }
    }

}
