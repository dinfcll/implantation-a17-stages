using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class Entreprisemap
    {
        public Entreprisemap(EntityTypeBuilder<Entreprise> entityBuilder)
        {
            entityBuilder.HasKey(m => m.Id);
            


            entityBuilder.Property(m => m.NoTel).IsRequired();
            entityBuilder.Property(m => m.date).IsRequired();
        }
    }
}
