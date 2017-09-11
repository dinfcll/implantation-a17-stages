using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class MachinMap
    {
        public MachinMap(EntityTypeBuilder<Machin> entityBuilder)
        {
            entityBuilder.HasKey(m => m.Id);
            entityBuilder.Property(m => m.NombreMagique).IsRequired();
            entityBuilder.Property(m => m.Truc).IsRequired();

        }
    }
}
