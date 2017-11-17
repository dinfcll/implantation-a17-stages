using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.DTOs
{
    public class EtudiantDto
    {
        public int NoDa { get; set; }
        public string  MotPasse { get; set; }

      
        public Etudiant Etudiant()
        {
            return new Etudiant {NoDa=NoDa,  MotPasse= MotPasse };
        }
    }
}