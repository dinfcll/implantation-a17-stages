using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SqueletteImplantation.DbEntities.Models
{
    public class Etudiant
    {
        public int NoDa { get; set; }
        public string Nom{ get; set;}
        public string Prenom { get; set; }
        public string AddresseCourriel { get; set; }
        public string MotPasse { get; set; }
        public string NoTel{get;set;}
        public Entreprise Entreprise { get; set; }
        public ICollection<RelProfesseurEtudiant>RelProfesseurEtudiants{get;set;}
    }
}
