using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace squeletteimplantation.Migrations
{
    public partial class Profeseur : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RelProfesseurEntreprise");

            migrationBuilder.DropTable(
                name: "RelProfesseurEtudiant");

            migrationBuilder.DropTable(
                name: "Professeur");

            migrationBuilder.CreateTable(
                name: "Enseignant",
                columns: table => new
                {
                    NoEnseignant = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Courriel = table.Column<string>(nullable: true),
                    MotDePasse = table.Column<string>(nullable: false),
                    Nom = table.Column<string>(nullable: true),
                    NomUti = table.Column<string>(nullable: false),
                    Prenom = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Enseignant", x => x.NoEnseignant);
                });

            migrationBuilder.CreateTable(
                name: "RelEnseignantEntreprise",
                columns: table => new
                {
                    NoEntreprise = table.Column<int>(nullable: false),
                    NoEnseignant = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RelEnseignantEntreprise", x => new { x.NoEntreprise, x.NoEnseignant });
                    table.ForeignKey(
                        name: "FK_RelEnseignantEntreprise_Enseignant_NoEnseignant",
                        column: x => x.NoEnseignant,
                        principalTable: "Enseignant",
                        principalColumn: "NoEnseignant",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RelEnseignantEntreprise_Entreprise_NoEntreprise",
                        column: x => x.NoEntreprise,
                        principalTable: "Entreprise",
                        principalColumn: "NoEntreprise",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RelEnseignantEtudiant",
                columns: table => new
                {
                    NoDa = table.Column<int>(nullable: false),
                    NoEnseignant = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RelEnseignantEtudiant", x => new { x.NoDa, x.NoEnseignant });
                    table.ForeignKey(
                        name: "FK_RelEnseignantEtudiant_Etudiant_NoDa",
                        column: x => x.NoDa,
                        principalTable: "Etudiant",
                        principalColumn: "NoDa",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RelEnseignantEtudiant_Enseignant_NoEnseignant",
                        column: x => x.NoEnseignant,
                        principalTable: "Enseignant",
                        principalColumn: "NoEnseignant",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RelEnseignantEntreprise_NoEnseignant",
                table: "RelEnseignantEntreprise",
                column: "NoEnseignant");

            migrationBuilder.CreateIndex(
                name: "IX_RelEnseignantEtudiant_NoEnseignant",
                table: "RelEnseignantEtudiant",
                column: "NoEnseignant");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RelEnseignantEntreprise");

            migrationBuilder.DropTable(
                name: "RelEnseignantEtudiant");

            migrationBuilder.DropTable(
                name: "Enseignant");

            migrationBuilder.CreateTable(
                name: "Professeur",
                columns: table => new
                {
                    NoProfesseur = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Courriel = table.Column<string>(nullable: true),
                    MotDePasse = table.Column<string>(nullable: false),
                    Nom = table.Column<string>(nullable: true),
                    NomUti = table.Column<string>(nullable: false),
                    Prenom = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Professeur", x => x.NoProfesseur);
                });

            migrationBuilder.CreateTable(
                name: "RelProfesseurEntreprise",
                columns: table => new
                {
                    NoEntreprise = table.Column<int>(nullable: false),
                    NoProfesseur = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RelProfesseurEntreprise", x => new { x.NoEntreprise, x.NoProfesseur });
                    table.ForeignKey(
                        name: "FK_RelProfesseurEntreprise_Entreprise_NoEntreprise",
                        column: x => x.NoEntreprise,
                        principalTable: "Entreprise",
                        principalColumn: "NoEntreprise",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RelProfesseurEntreprise_Professeur_NoProfesseur",
                        column: x => x.NoProfesseur,
                        principalTable: "Professeur",
                        principalColumn: "NoProfesseur",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RelProfesseurEtudiant",
                columns: table => new
                {
                    NoDa = table.Column<int>(nullable: false),
                    NoProfesseur = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RelProfesseurEtudiant", x => new { x.NoDa, x.NoProfesseur });
                    table.ForeignKey(
                        name: "FK_RelProfesseurEtudiant_Etudiant_NoDa",
                        column: x => x.NoDa,
                        principalTable: "Etudiant",
                        principalColumn: "NoDa",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RelProfesseurEtudiant_Professeur_NoProfesseur",
                        column: x => x.NoProfesseur,
                        principalTable: "Professeur",
                        principalColumn: "NoProfesseur",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RelProfesseurEntreprise_NoProfesseur",
                table: "RelProfesseurEntreprise",
                column: "NoProfesseur");

            migrationBuilder.CreateIndex(
                name: "IX_RelProfesseurEtudiant_NoProfesseur",
                table: "RelProfesseurEtudiant",
                column: "NoProfesseur");
        }
    }
}
