using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.DTOs
{
    public class EnseignantDto
    {
        public string Courriel { get; set; }
        public string MotDePasse { get; set; }

        /*public Enseignant CreateEnseignant()
        {
            return new Enseignant { Email = Email, MotDePasse = MotDePasse };
        }*/
        public Enseignant Enseignant()
        {
            return new Enseignant {Courriel=Courriel, MotDePasse=MotDePasse };
        }
    }
}