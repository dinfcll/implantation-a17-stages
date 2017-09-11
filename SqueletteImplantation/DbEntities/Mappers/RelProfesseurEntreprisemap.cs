 
 
 using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;
 

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class RelProfesseurEntreprisemap
    {
        public RelProfesseurEntreprisemap(EntityTypeBuilder<RelProfesseurEntreprise> entityBuilder)
        {
           //Clé primaire avec deux champs
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
            .WithMany(ee=>ee.RelEnsengnantEntreprises)
            .HasForeignKey(ee=>ee.NoEntreprise);
        }
    }
}
