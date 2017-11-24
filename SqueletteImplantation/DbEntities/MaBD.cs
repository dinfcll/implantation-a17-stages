using Microsoft.EntityFrameworkCore;
using SqueletteImplantation.DbEntities.Mappers;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities
{
    public class MaBd : DbContext
    {        
        public virtual DbSet<Enseignant> Enseignant {get; set;}
        public virtual DbSet<Entreprise> Entreprise {get; set;}
        public virtual DbSet<Etudiant> Etudiant { get; set; }
        public virtual DbSet<RelEnseignantEntreprise> RelEnseignantEntreprise { get; set; }
        
        public MaBd(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            new RelEnseignantEntreprisemap(modelBuilder.Entity<RelEnseignantEntreprise>());
            new Entreprisemap(modelBuilder.Entity<Entreprise>());
            new Enseignantmap(modelBuilder.Entity<Enseignant>());
            new Etudiantmap(modelBuilder.Entity<Etudiant>());

            modelBuilder.Entity<Entreprise>()
                .Property(m => m.Id)
                .ValueGeneratedOnAdd();          

            modelBuilder.Entity<RelEnseignantEntreprise>()
              .HasKey(m => new { m.Id, m.NoEnseignant });

            modelBuilder.Entity<RelEnseignantEntreprise>()
                .HasOne(m => m.enseignant)
                .WithMany(m => m.RelEnseignantEntreprises)
                .HasForeignKey(m => m.NoEnseignant)
                .HasConstraintName("fk_Enseignant_relEnseignantEntreprise");

            modelBuilder.Entity<RelEnseignantEntreprise>()
                .HasOne(m => m.entreprise)
                .WithMany(m => m.relenseignantentreprises)
                .HasForeignKey(m => m.Id)
                .HasConstraintName("fk_Entreprise_relEnseignantEtudiant");

            modelBuilder.Entity<Etudiant>()
                .HasOne(m => m.entreprise)
                .WithMany(m => m.Etudiants)
                .HasForeignKey(m => m.Id)
                .HasConstraintName("fk_Entreprise_Etudiant");

            modelBuilder.Entity<Etudiant>()
                .HasOne(m => m.enseignant)
                .WithMany(m => m.Etudiants)
                .HasForeignKey(m => m.NoEnseignant)
                .HasConstraintName("FK_Etudiant_Enseignant");
        }
    }
}
