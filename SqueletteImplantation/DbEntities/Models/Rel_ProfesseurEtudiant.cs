using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SqueletteImplantation.DbEntities.Models
{
    public class RelProfesseurEtudiant
    {
        // Clé étrangère Étudiant
        public int NoDa { get; set; }
        public Etudiant Etudiant { get; set; }
        //Clé étrangère Professeur
        public int NoEnseignant { get; set; }
        public Professeur Professeur { get; set; }
    }
}
