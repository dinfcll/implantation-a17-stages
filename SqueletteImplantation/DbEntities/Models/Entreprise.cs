using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SqueletteImplantation.DbEntities.Models
{
    public class Entreprise
    {
        public int NoEntreprise {get; set; }
        public string Lieu { get; set; }
        public string NoTel { get; set; }
        public string Poste { get; set; }
        public string PersonneResponsable { get; set; }
        public int NbreConfirmation { get; set; }
        public int NbrPeutEtre { get; set; }
        public int NbreProbablementNon { get; set; }
        public int NbreNon { get; set; }
        public int NbreOui { get; set; }
        public string date { get; set; }
        public ICollection<Etudiant>Etudiants;
        public ICollection<RelProfesseurEntreprise>RelProfesseurEntreprises{get;set;}
        // ajouter du sel *

    }
}
