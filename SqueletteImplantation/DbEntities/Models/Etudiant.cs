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
        // Un étudiant est associé à une entreprise
        public Entreprise Entreprise { get; set; }
        //Un étudiant peut être associé à plusieurs professeurs
        //Len avec la table de relation
        public ICollection<RelProfesseurEtudiant>RelProfesseurEtudiants{get;set;}
    }
}
