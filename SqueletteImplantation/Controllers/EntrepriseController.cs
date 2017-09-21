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
        [Route("api/Entreprise")]
        public IEnumerable ToutesEntreprises(string Annee)
        {
            //Recherche l'occurence des entreprises recherchées pour une année
           /* List<Entreprise> ListeEntreprise = 
            _maBd.Entreprise.Where(m=>m.date==Annee).ToList();*/
            return from b in _maBd.Entreprise
            where b.date==Annee
            select b;
        }

        [HttpGet]
        [Route("api/Entreprise")]
        public IEnumerable Recherche(string recherchetxtbox)
        {
             // Linq, recherche l'occurence dans tous les enregistrements.
             return from b in _maBd.Entreprise
             where b.date.Contains(recherchetxtbox) || 
             b.Lieu.Contains(recherchetxtbox)||
             b.NoTel.Contains(recherchetxtbox)||
             b.PersonneResponsable.Contains(recherchetxtbox)||
             b.Poste.Contains(recherchetxtbox)
             select b;
             
             
        }
    }

}

