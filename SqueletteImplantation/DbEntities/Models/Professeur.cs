using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SqueletteImplantation.DbEntities.Models
{
    public class Professeur
    {
        public int NoEnseignant { get; set; }
        public string Nom_Utilisateur { get; set; }
        public string Nom { get; set; }
        public string PreNom { get; set; }
        public string Courriel { get; set; }
        public string MotDePasse { get; set; }
    }
}
