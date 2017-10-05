﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using SqueletteImplantation.DbEntities;

namespace squeletteimplantation.Migrations
{
    [DbContext(typeof(MaBd))]
    partial class MaBdModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "1.1.2");

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.Enseignant", b =>
                {
                    b.Property<int>("NoEnseignant")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Courriel");

                    b.Property<string>("MotDePasse")
                        .IsRequired();

                    b.Property<string>("Nom");

                    b.Property<string>("NomUti")
                        .IsRequired();

                    b.Property<string>("Prenom");

                    b.HasKey("NoEnseignant");

                    b.ToTable("Enseignant");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.Entreprise", b =>
                {
                    b.Property<int>("NoEntreprise")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CourrielRes");

                    b.Property<string>("Lieu");

                    b.Property<int>("NbrPeutEtre");

                    b.Property<int>("NbreConfirmation");

                    b.Property<int>("NbreNon");

                    b.Property<int>("NbreOui");

                    b.Property<int>("NbreProbablementNon");

                    b.Property<string>("NoTel")
                        .IsRequired();

                    b.Property<string>("NomEntreprise");

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

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelEnseignantEntreprise", b =>
                {
                    b.Property<int>("NoEntreprise");

                    b.Property<int>("NoEnseignant");

                    b.HasKey("NoEntreprise", "NoEnseignant");

                    b.HasIndex("NoEnseignant");

                    b.ToTable("RelEnseignantEntreprise");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelEnseignantEtudiant", b =>
                {
                    b.Property<int>("NoDa");

                    b.Property<int>("NoEnseignant");

                    b.HasKey("NoDa", "NoEnseignant");

                    b.HasIndex("NoEnseignant");

                    b.ToTable("RelEnseignantEtudiant");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.Etudiant", b =>
                {
                    b.HasOne("SqueletteImplantation.DbEntities.Models.Entreprise", "Entreprise")
                        .WithMany()
                        .HasForeignKey("EntrepriseNoEntreprise");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelEnseignantEntreprise", b =>
                {
                    b.HasOne("SqueletteImplantation.DbEntities.Models.Enseignant", "Enseignant")
                        .WithMany("RelEnseignantEntreprises")
                        .HasForeignKey("NoEnseignant")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SqueletteImplantation.DbEntities.Models.Entreprise", "Entreprise")
                        .WithMany("RelEnseignantEntreprises")
                        .HasForeignKey("NoEntreprise")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelEnseignantEtudiant", b =>
                {
                    b.HasOne("SqueletteImplantation.DbEntities.Models.Etudiant", "Etudiant")
                        .WithMany("RelEnseignantEtudiants")
                        .HasForeignKey("NoDa")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SqueletteImplantation.DbEntities.Models.Enseignant", "Enseignant")
                        .WithMany("RelEnseignantEtudiant")
                        .HasForeignKey("NoEnseignant")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
