﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using SqueletteImplantation.DbEntities;

namespace SqueletteImplantation.Migrations
{
    [DbContext(typeof(MaBd))]
    [Migration("20171124155514_newMigration")]
    partial class newMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
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
                    b.Property<int?>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("courrielres");

                    b.Property<string>("date")
                        .IsRequired();

                    b.Property<string>("lieu");

                    b.Property<int>("nbreconfirmation");

                    b.Property<int>("nbrenon");

                    b.Property<int>("nbreoui");

                    b.Property<int>("nbreprobablementnon");

                    b.Property<int>("nbrpeutetre");

                    b.Property<string>("nomentreprise");

                    b.Property<string>("notel")
                        .IsRequired();

                    b.Property<string>("personneresponsable");

                    b.Property<string>("poste");

                    b.HasKey("Id");

                    b.ToTable("Entreprise");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.Etudiant", b =>
                {
                    b.Property<int>("NoDa")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(7);

                    b.Property<string>("AddresseCourriel");

                    b.Property<string>("Annee")
                        .IsRequired();

                    b.Property<int?>("Id");

                    b.Property<string>("MotPasse")
                        .IsRequired();

                    b.Property<string>("NoTel");

                    b.Property<string>("Nom");

                    b.Property<string>("Prenom");

                    b.Property<string>("Profil")
                        .IsRequired();

                    b.HasKey("NoDa");

                    b.HasIndex("Id");

                    b.ToTable("Etudiant");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelEnseignantEntreprise", b =>
                {
                    b.Property<int?>("Id");

                    b.Property<int>("NoEnseignant");

                    b.HasKey("Id", "NoEnseignant");

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
                    b.HasOne("SqueletteImplantation.DbEntities.Models.Entreprise", "entreprise")
                        .WithMany("Etudiants")
                        .HasForeignKey("Id")
                        .HasConstraintName("fk_Entreprise_Etudiant");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelEnseignantEntreprise", b =>
                {
                    b.HasOne("SqueletteImplantation.DbEntities.Models.Entreprise", "entreprise")
                        .WithMany("relenseignantentreprises")
                        .HasForeignKey("Id")
                        .HasConstraintName("fk_Entreprise_relEnseignantEtudiant")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SqueletteImplantation.DbEntities.Models.Enseignant", "enseignant")
                        .WithMany("RelEnseignantEntreprises")
                        .HasForeignKey("NoEnseignant")
                        .HasConstraintName("fk_Enseignant_relEnseignantEntreprise")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelEnseignantEtudiant", b =>
                {
                    b.HasOne("SqueletteImplantation.DbEntities.Models.Etudiant", "etudiant")
                        .WithMany("RelEnseignantEtudiants")
                        .HasForeignKey("NoDa")
                        .HasConstraintName("fk_Etudiant_relEnseignantEtudiant")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SqueletteImplantation.DbEntities.Models.Enseignant", "enseignant")
                        .WithMany("RelEnseignantEtudiant")
                        .HasForeignKey("NoEnseignant")
                        .HasConstraintName("fk_Enseignant_relEnseignantEtudiant")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
