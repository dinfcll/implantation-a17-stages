 
 
 using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;
 

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class RelEnseignantEntreprisemap
    {
        public RelEnseignantEntreprisemap(EntityTypeBuilder<RelEnseignantEntreprise> entityBuilder)
        {
            entityBuilder.Property(m => m.NoEnseignant).IsRequired();
            entityBuilder.Property(m => m.Id).IsRequired();
        }
    }
}
