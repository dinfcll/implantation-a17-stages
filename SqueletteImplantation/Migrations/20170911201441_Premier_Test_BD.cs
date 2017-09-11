using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace squeletteimplantation.Migrations
{
    public partial class Premier_Test_BD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Entreprise",
                columns: table => new
                {
                    NoEntreprise = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Lieu = table.Column<string>(nullable: true),
                    NbrPeutEtre = table.Column<int>(nullable: false),
                    NbreConfirmation = table.Column<int>(nullable: false),
                    NbreNon = table.Column<int>(nullable: false),
                    NbreOui = table.Column<int>(nullable: false),
                    NbreProbablementNon = table.Column<int>(nullable: false),
                    NoTel = table.Column<string>(nullable: false),
                    PersonneResponsable = table.Column<string>(nullable: true),
                    Poste = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entreprise", x => x.NoEntreprise);
                });

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
                name: "Etudiant",
                columns: table => new
                {
                    NoDa = table.Column<int>(maxLength: 7, nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    AddresseCourriel = table.Column<string>(nullable: true),
                    EntrepriseNoEntreprise = table.Column<int>(nullable: true),
                    MotPasse = table.Column<string>(nullable: false),
                    NoTel = table.Column<string>(nullable: true),
                    Nom = table.Column<string>(nullable: true),
                    Prenom = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Etudiant", x => x.NoDa);
                    table.ForeignKey(
                        name: "FK_Etudiant_Entreprise_EntrepriseNoEntreprise",
                        column: x => x.EntrepriseNoEntreprise,
                        principalTable: "Entreprise",
                        principalColumn: "NoEntreprise",
                        onDelete: ReferentialAction.Restrict);
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
                name: "IX_Etudiant_EntrepriseNoEntreprise",
                table: "Etudiant",
                column: "EntrepriseNoEntreprise");

            migrationBuilder.CreateIndex(
                name: "IX_RelProfesseurEntreprise_NoProfesseur",
                table: "RelProfesseurEntreprise",
                column: "NoProfesseur");

            migrationBuilder.CreateIndex(
                name: "IX_RelProfesseurEtudiant_NoProfesseur",
                table: "RelProfesseurEtudiant",
                column: "NoProfesseur");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RelProfesseurEntreprise");

            migrationBuilder.DropTable(
                name: "RelProfesseurEtudiant");

            migrationBuilder.DropTable(
                name: "Etudiant");

            migrationBuilder.DropTable(
                name: "Professeur");

            migrationBuilder.DropTable(
                name: "Entreprise");
        }
    }
}
