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
        public string AddCourriel { get; set; }
        public string MotDePasse { get; set; }
        public int NoEnseignant { get; set; }
        public int NoEntreprise { get; set; }

    }
}
