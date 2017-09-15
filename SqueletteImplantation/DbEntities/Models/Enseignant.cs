using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SqueletteImplantation.DbEntities.Models
{
    public class Enseignant
    {
        public int NoEnseignant {get; set; }
        public string NomUti { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Courriel { get; set; }
        public string MotDePasse { get; set; }
        public ICollection<RelEnseignantEtudiant>RelEnseignantEtudiant{get;set;}
        public ICollection<RelEnseignantEntreprise>RelEnseignantEntreprises{get;set;}

    }
}
