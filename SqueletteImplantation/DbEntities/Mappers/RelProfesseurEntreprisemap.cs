 
 
 using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;
 

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class RelProfesseurEntreprisemap
    {
        public RelProfesseurEntreprisemap(EntityTypeBuilder<RelProfesseurEntreprise> entityBuilder)
        {
           entityBuilder
            .HasKey(ee=>new {ee.NoEntreprise,ee.NoProfesseur});

            //Clé étrangère NoProfesseur
            entityBuilder
            .HasOne(ee => ee.Professeur)
            .WithMany(b => b.RelProfesseurEntreprises)
            .HasForeignKey(bc => bc.NoProfesseur);
            //Clé étrangère NoEntreprise
            entityBuilder
            .HasOne(ee=>ee.Entreprise)
            .WithMany(ee=>ee.RelProfesseurEntreprises)
            .HasForeignKey(ee=>ee.NoEntreprise);
        }
    }
}
