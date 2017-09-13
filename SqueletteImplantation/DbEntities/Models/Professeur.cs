using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SqueletteImplantation.DbEntities.Models
{
    public class Professeur
    {
        public int NoProfesseur {get; set; }
        public string NomUti { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Courriel { get; set; }
        public string MotDePasse { get; set; }
        public ICollection<RelProfesseurEtudiant>RelProfesseurEtudiant{get;set;}
        public ICollection<RelProfesseurEntreprise>RelProfesseurEntreprises{get;set;}

    }
}
