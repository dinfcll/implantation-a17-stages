using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.DTOs
{
    public class EnseignantDto
    {
        public string Courriel { get; set; }
        public string MotDePasse { get; set; }

       
        public Enseignant Enseignant()
        {
            return new Enseignant {Courriel=Courriel, MotDePasse=MotDePasse };
        }
    }
}