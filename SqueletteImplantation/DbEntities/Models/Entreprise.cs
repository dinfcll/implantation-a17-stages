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

        public string nomentreprise { get; set; }
        public string lieu { get; set; }
        public string notel { get; set; }
        public string poste { get; set; }
        public string personneresponsable { get; set; }
        public int nbreconfirmation { get; set; }
        public int nbrpeutetre { get; set; }
        public int nbreprobablementnon { get; set; }
        public int nbrenon { get; set; }
        public int nbreoui { get; set; }
        public string date { get; set; }
        public string courrielres {get; set;}
        public List<RelEnseignantEntreprise>relenseignantentreprises{get;set;}
        public int Id { get; set; }
        public List<Etudiant> Etudiants { get; set; }
        // ajouter du sel *

    }
}
