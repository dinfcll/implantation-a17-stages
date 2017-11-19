using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class RelEnseignantEtudiantmap
    {
        public RelEnseignantEtudiantmap(EntityTypeBuilder<RelEnseignantEtudiant> entityBuilder)
        {
            entityBuilder.Property(m => m.NoDa).IsRequired();
            entityBuilder.Property(m => m.NoEnseignant).IsRequired();
        }
    }
}
