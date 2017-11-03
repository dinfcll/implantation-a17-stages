using Microsoft.EntityFrameworkCore;
using SqueletteImplantation.DbEntities.Mappers;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities
{
    public class MaBd : DbContext
    {
        public virtual DbSet<Machin> Machin { get; set; }
        public virtual DbSet<Enseignant> Enseignant {get; set;}
        public virtual DbSet<Entreprise> Entreprise {get; set;}
        public virtual DbSet<Etudiant> Etudiant { get; set; }
        public MaBd(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            new MachinMap(modelBuilder.Entity<Machin>());
            new RelEnseignantEntreprisemap(modelBuilder.Entity<RelEnseignantEntreprise>());
            new RelEnseignantEtudiantmap(modelBuilder.Entity<RelEnseignantEtudiant>());
            new Entreprisemap(modelBuilder.Entity<Entreprise>());
            new Enseignantmap(modelBuilder.Entity<Enseignant>());
            new Etudiantmap(modelBuilder.Entity<Etudiant>());
        }
    }
}
