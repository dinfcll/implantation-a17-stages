using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class Professeurmap
    {
        public Professeurmap(EntityTypeBuilder<Professeur> entityBuilder)
        {
            entityBuilder.HasKey(m => m.NoProfesseur);
            entityBuilder.Property(m => m.NomUti).IsRequired();
            entityBuilder.Property(m => m.MotDePasse).IsRequired();
            entityBuilder.Property(m=>m.Prenom);
             entityBuilder.Property(m=>m.Nom);
             entityBuilder.Property(m=>m.Courriel);
        }
    }
}
