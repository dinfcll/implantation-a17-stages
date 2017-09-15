using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SqueletteImplantation.DbEntities.Models
{
    public class RelEnseignantEntreprise
    {
        //Clé étrangère Enseignant:
        public int NoEnseignant { get; set; }
        public Professeur Professeur { get; set; }
        //Clé étrangère Entreprise:
        public int NoEntreprise { get; set; }
        public Entreprise Entreprise { get; set; }

    }
}
