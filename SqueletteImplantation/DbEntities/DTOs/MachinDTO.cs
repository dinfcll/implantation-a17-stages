using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.DTOs
{
    public class MachinDto
    {
        public string Truc { get; set; }
        public int NombreMagique { get; set; }

        public Machin CreateMachin()
        {
            return new Machin { Truc = Truc, NombreMagique = NombreMagique };
        }
    }
}
