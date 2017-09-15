 
 
 using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;
 

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class RelEnseignantEntreprisemap
    {
        public RelEnseignantEntreprisemap(EntityTypeBuilder<RelEnseignantEntreprise> entityBuilder)
        {
           entityBuilder
            .HasKey(ee=>new {ee.NoEntreprise,ee.NoEnseignant});

            //Clé étrangère NoEnseignant
            entityBuilder
            .HasOne(ee => ee.Enseignant)
            .WithMany(b => b.RelEnseignantEntreprises)
            .HasForeignKey(bc => bc.NoEnseignant);
            //Clé étrangère NoEntreprise
            entityBuilder
            .HasOne(ee=>ee.Entreprise)
            .WithMany(ee=>ee.RelEnseignantEntreprises)
            .HasForeignKey(ee=>ee.NoEntreprise);
        }
    }
}
