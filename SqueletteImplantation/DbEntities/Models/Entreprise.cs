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
        //Une entreprise a plusieurs stagiaires 
        public ICollection<Etudiant>Etudiants;
        //Une entreprise est suivie par plusieurs professeurs
        //Lien vers classe de relation
        public ICollection<RelProfesseurEntreprise>RelEnsengnantEntreprises{get;set;}
        // ajouter du sel **************************************************************************

    }
}
