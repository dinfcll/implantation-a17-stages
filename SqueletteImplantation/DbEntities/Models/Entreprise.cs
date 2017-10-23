using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SqueletteImplantation.DbEntities.Models
{
    public class Entreprise
    {
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int NoEntreprise {get; set; }

        public string NomEntreprise { get; set; }
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
        public string CourrielRes {get; set;}
        public ICollection<Etudiant>Etudiants;
        public ICollection<RelEnseignantEntreprise>RelEnseignantEntreprises{get;set;}
        // ajouter du sel *

    }
}
