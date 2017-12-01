using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class Etudiantmap
    {
        public Etudiantmap(EntityTypeBuilder<Etudiant> entityBuilder)
        {
            entityBuilder.HasKey(m => m.NoDa);
            entityBuilder.Property(m=>m.NoDa).HasMaxLength(7);
            entityBuilder.Property(m => m.MotPasse).IsRequired();
            entityBuilder.Property(m => m.AddresseCourriel);
            entityBuilder.Property(m=>m.NoTel);
            entityBuilder.Property(m => m.Profil).IsRequired();
            entityBuilder.Property(m => m.Annee).IsRequired();
            entityBuilder.Property(m => m.Id);
            entityBuilder.Property(m => m.NoEnseignant);
            entityBuilder.Property(m=>m.Nom);
            entityBuilder.Property(m=>m.Prenom);
        }
    }
}
