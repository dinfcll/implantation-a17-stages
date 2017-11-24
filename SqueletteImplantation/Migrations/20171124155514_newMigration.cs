using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SqueletteImplantation.Migrations
{
    public partial class newMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                name: "Entreprise",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    courrielres = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: false),
                    lieu = table.Column<string>(nullable: true),
                    nbreconfirmation = table.Column<int>(nullable: false),
                    nbrenon = table.Column<int>(nullable: false),
                    nbreoui = table.Column<int>(nullable: false),
                    nbreprobablementnon = table.Column<int>(nullable: false),
                    nbrpeutetre = table.Column<int>(nullable: false),
                    nomentreprise = table.Column<string>(nullable: true),
                    notel = table.Column<string>(nullable: false),
                    personneresponsable = table.Column<string>(nullable: true),
                    poste = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entreprise", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Etudiant",
                columns: table => new
                {
                    NoDa = table.Column<int>(maxLength: 7, nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    AddresseCourriel = table.Column<string>(nullable: true),
                    Annee = table.Column<string>(nullable: false),
                    Id = table.Column<int>(nullable: true),
                    MotPasse = table.Column<string>(nullable: false),
                    NoTel = table.Column<string>(nullable: true),
                    Nom = table.Column<string>(nullable: true),
                    Prenom = table.Column<string>(nullable: true),
                    Profil = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Etudiant", x => x.NoDa);
                    table.ForeignKey(
                        name: "fk_Entreprise_Etudiant",
                        column: x => x.Id,
                        principalTable: "Entreprise",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RelEnseignantEntreprise",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    NoEnseignant = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RelEnseignantEntreprise", x => new { x.Id, x.NoEnseignant });
                    table.ForeignKey(
                        name: "fk_Entreprise_relEnseignantEtudiant",
                        column: x => x.Id,
                        principalTable: "Entreprise",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_Enseignant_relEnseignantEntreprise",
                        column: x => x.NoEnseignant,
                        principalTable: "Enseignant",
                        principalColumn: "NoEnseignant",
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
                        name: "fk_Etudiant_relEnseignantEtudiant",
                        column: x => x.NoDa,
                        principalTable: "Etudiant",
                        principalColumn: "NoDa",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_Enseignant_relEnseignantEtudiant",
                        column: x => x.NoEnseignant,
                        principalTable: "Enseignant",
                        principalColumn: "NoEnseignant",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Etudiant_Id",
                table: "Etudiant",
                column: "Id");

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
                name: "Etudiant");

            migrationBuilder.DropTable(
                name: "Enseignant");

            migrationBuilder.DropTable(
                name: "Entreprise");
        }
    }
}
