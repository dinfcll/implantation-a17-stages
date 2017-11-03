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
        public string Profil { get; set; }
        public string Annee { get; set; }


        public int Id { get; set; }
        public Entreprise entreprise { get; set; }
        public List<RelEnseignantEtudiant>RelEnseignantEtudiant{get;set;}
    }
}
