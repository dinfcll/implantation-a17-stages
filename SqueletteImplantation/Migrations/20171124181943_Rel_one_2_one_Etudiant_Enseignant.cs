using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SqueletteImplantation.Migrations
{
    public partial class Rel_one_2_one_Etudiant_Enseignant : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RelEnseignantEtudiant");

            migrationBuilder.AddColumn<int>(
                name: "NoEnseignant",
                table: "Etudiant",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Etudiant_NoEnseignant",
                table: "Etudiant",
                column: "NoEnseignant");

            migrationBuilder.AddForeignKey(
                name: "FK_Etudiant_Enseignant",
                table: "Etudiant",
                column: "NoEnseignant",
                principalTable: "Enseignant",
                principalColumn: "NoEnseignant",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Etudiant_Enseignant",
                table: "Etudiant");

            migrationBuilder.DropIndex(
                name: "IX_Etudiant_NoEnseignant",
                table: "Etudiant");

            migrationBuilder.DropColumn(
                name: "NoEnseignant",
                table: "Etudiant");

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
                name: "IX_RelEnseignantEtudiant_NoEnseignant",
                table: "RelEnseignantEtudiant",
                column: "NoEnseignant");
        }
    }
}
