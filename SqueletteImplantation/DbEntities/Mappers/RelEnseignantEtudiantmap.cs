using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class RelEnseignantEtudiantmap
    {
        public RelEnseignantEtudiantmap(EntityTypeBuilder<RelEnseignantEtudiant> entityBuilder)
        {
           entityBuilder
            .HasKey(ee=>new {ee.NoDa,ee.NoEnseignant});

            //Clé étrangère NoEnseignant
            entityBuilder
            .HasOne(ee => ee.Enseignant)
            .WithMany(b => b.RelEnseignantEtudiant)
            .HasForeignKey(bc => bc.NoEnseignant);
            //Clé étrangère NoEntreprise
            entityBuilder
            .HasOne(ee=>ee.Etudiant)
            .WithMany(ee=>ee.RelEnseignantEtudiants)
            .HasForeignKey(ee=>ee.NoDa);
        }
    }
}
