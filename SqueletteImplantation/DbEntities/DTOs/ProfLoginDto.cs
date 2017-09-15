using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.DTOs
{
    public class ProfLoginDTO
    {
        public string NomUti{get;set;}
        public string MotDePasse{get; set;}

        public Enseignant CreateProfLogin()
        {
            return new Enseignant { MotDePasse=MotDePasse,NomUti=NomUti };
        }
    }
}