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
        public Enseignant enseignant { get; set; }
        //Clé étrangère Entreprise:
        public int? Id { get; set; }
        public Entreprise entreprise { get; set; }

    }
}
