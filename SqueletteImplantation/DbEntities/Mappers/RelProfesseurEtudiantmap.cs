using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class RelProfesseurEtudiantmap
    {
        public RelProfesseurEtudiantmap(EntityTypeBuilder<RelProfesseurEtudiant> entityBuilder)
        {
           entityBuilder
            .HasKey(ee=>new {ee.NoDa,ee.NoProfesseur});

            //Clé étrangère NoProfesseur
            entityBuilder
            .HasOne(ee => ee.Professeur)
            .WithMany(b => b.RelProfesseurEtudiant)
            .HasForeignKey(bc => bc.NoProfesseur);
            //Clé étrangère NoEntreprise
            entityBuilder
            .HasOne(ee=>ee.Etudiant)
            .WithMany(ee=>ee.RelProfesseurEtudiants)
            .HasForeignKey(ee=>ee.NoDa);
        }
    }
}
