﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using SqueletteImplantation.DbEntities;

namespace squeletteimplantation.Migrations
{
    [DbContext(typeof(MaBd))]
    [Migration("20171102003645_Foreign_Key")]
    partial class Foreign_Key
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
                    b.Property<int>("Id")
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

                    b.Property<int?>("EntrepriseId");

                    b.Property<string>("MotPasse")
                        .IsRequired();

                    b.Property<string>("NoTel");

                    b.Property<string>("Nom");

                    b.Property<string>("Prenom");

                    b.HasKey("NoDa");

                    b.HasIndex("EntrepriseId");

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
                        .HasForeignKey("EntrepriseId");
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelEnseignantEntreprise", b =>
                {
                    b.HasOne("SqueletteImplantation.DbEntities.Models.Enseignant", "enseignant")
                        .WithMany("RelEnseignantEntreprises")
                        .HasForeignKey("NoEnseignant")
                        .HasConstraintName("fk_Enseignant_relEnseignantEntreprise")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SqueletteImplantation.DbEntities.Models.Entreprise", "entreprise")
                        .WithMany("relenseignantentreprises")
                        .HasForeignKey("NoEntreprise")
                        .HasConstraintName("fk_Entreprise_relEnseignantEtudiant")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SqueletteImplantation.DbEntities.Models.RelEnseignantEtudiant", b =>
                {
                    b.HasOne("SqueletteImplantation.DbEntities.Models.Etudiant", "etudiant")
                        .WithMany("RelEnseignantEtudiant")
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
