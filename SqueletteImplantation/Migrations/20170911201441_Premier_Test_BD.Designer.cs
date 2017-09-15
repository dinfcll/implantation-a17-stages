using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using SqueletteImplantation.DbEntities;

namespace squeletteimplantation.Migrations
{
    [DbContext(typeof(MaBd))]
    [Migration("20170911201441_Premier_Test_BD")]
    partial class Premier_Test_BD
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "1.1.2");

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.Entreprise", b =>
                {
                    b.Property<int>("NoEntreprise")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Lieu");

                    b.Property<int>("NbrPeutEtre");

                    b.Property<int>("NbreConfirmation");

                    b.Property<int>("NbreNon");

                    b.Property<int>("NbreOui");

                    b.Property<int>("NbreProbablementNon");

                    b.Property<string>("NoTel")
                        .IsRequired();

                    b.Property<string>("PersonneResponsable");

                    b.Property<string>("Poste");

                    b.Property<string>("date")
                        .IsRequired();

                    b.HasKey("NoEntreprise");

                    b.ToTable("Entreprise");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.Etudiant", b =>
                {
                    b.Property<int>("NoDa")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(7);

                    b.Property<string>("AddresseCourriel");

                    b.Property<int?>("EntrepriseNoEntreprise");

                    b.Property<string>("MotPasse")
                        .IsRequired();

                    b.Property<string>("NoTel");

                    b.Property<string>("Nom");

                    b.Property<string>("Prenom");

                    b.HasKey("NoDa");

                    b.HasIndex("EntrepriseNoEntreprise");

                    b.ToTable("Etudiant");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.Machin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("NombreMagique");

                    b.Property<string>("Truc")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Machin");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.Professeur", b =>
                {
                    b.Property<int>("NoProfesseur")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Courriel");

                    b.Property<string>("MotDePasse")
                        .IsRequired();

                    b.Property<string>("Nom");

                    b.Property<string>("NomUti")
                        .IsRequired();

                    b.Property<string>("Prenom");

                    b.HasKey("NoProfesseur");

                    b.ToTable("Professeur");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelProfesseurEntreprise", b =>
                {
                    b.Property<int>("NoEntreprise");

                    b.Property<int>("NoProfesseur");

                    b.HasKey("NoEntreprise", "NoProfesseur");

                    b.HasIndex("NoProfesseur");

                    b.ToTable("RelProfesseurEntreprise");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelProfesseurEtudiant", b =>
                {
                    b.Property<int>("NoDa");

                    b.Property<int>("NoProfesseur");

                    b.HasKey("NoDa", "NoProfesseur");

                    b.HasIndex("NoProfesseur");

                    b.ToTable("RelProfesseurEtudiant");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.Etudiant", b =>
                {
                    b.HasOne("SqueletteImplantation.DbEntities.Models.Entreprise", "Entreprise")
                        .WithMany()
                        .HasForeignKey("EntrepriseNoEntreprise");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelProfesseurEntreprise", b =>
                {
                    b.HasOne("SqueletteImplantation.DbEntities.Models.Entreprise", "Entreprise")
                        .WithMany("RelEnsengnantEntreprises")
                        .HasForeignKey("NoEntreprise")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SqueletteImplantation.DbEntities.Models.Professeur", "Professeur")
                        .WithMany("RelProfesseurEntreprises")
                        .HasForeignKey("NoProfesseur")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelProfesseurEtudiant", b =>
                {
                    b.HasOne("SqueletteImplantation.DbEntities.Models.Etudiant", "Etudiant")
                        .WithMany("RelProfesseurEtudiants")
                        .HasForeignKey("NoDa")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SqueletteImplantation.DbEntities.Models.Professeur", "Professeur")
                        .WithMany("RelProfesseurEtudiant")
                        .HasForeignKey("NoProfesseur")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
