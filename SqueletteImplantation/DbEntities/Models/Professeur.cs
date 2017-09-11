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
        //Un professeur peut avoir plusieurs étudiant à sa charge
        //Lien avec la table de relation
        public ICollection<RelProfesseurEtudiant>RelProfesseurEtudiant{get;set;}
        //Un professeur suis plusieurs entreprises
        //Lien avec la table de relation
        public ICollection<RelProfesseurEntreprise>RelProfesseurEntreprises{get;set;}

        
    }
}
