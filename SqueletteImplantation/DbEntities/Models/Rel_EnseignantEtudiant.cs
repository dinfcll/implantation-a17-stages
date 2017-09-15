using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SqueletteImplantation.DbEntities.Models
{
    public class RelEnseignantEtudiant
    {
        // Clé étrangère Étudiant
        public int NoDa { get; set; }
        public Etudiant Etudiant { get; set; }
        //Clé étrangère Enseignant
        public int NoEnseignant { get; set; }
        public Enseignant Enseignant { get; set; }
    }
}
