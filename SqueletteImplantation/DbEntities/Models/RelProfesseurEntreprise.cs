using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SqueletteImplantation.DbEntities.Models
{
    public class RelProfesseurEntreprise
    {
        //Clé étrangère Professeur:
        public int NoProfesseur { get; set; }
        public Professeur Professeur { get; set; }
        //Clé étrangère Entreprise:
        public int NoEntreprise { get; set; }
        public Entreprise Entreprise { get; set; }

    }
}
