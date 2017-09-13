using Microsoft.EntityFrameworkCore;
using SqueletteImplantation.DbEntities.Mappers;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities
{
    public class MaBd : DbContext
    {
        public virtual DbSet<Machin> Machin { get; set; }
        public virtual DbSet<Professeur> Professeur {get; set;}
        public MaBd(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            new MachinMap(modelBuilder.Entity<Machin>());
            new RelProfesseurEntreprisemap(modelBuilder.Entity<RelProfesseurEntreprise>());
            new RelProfesseurEtudiantmap(modelBuilder.Entity<RelProfesseurEtudiant>());
            new Entreprisemap(modelBuilder.Entity<Entreprise>());
            new Professeurmap(modelBuilder.Entity<Professeur>());
            new Etudiantmap(modelBuilder.Entity<Etudiant>());
        }
    }
}
