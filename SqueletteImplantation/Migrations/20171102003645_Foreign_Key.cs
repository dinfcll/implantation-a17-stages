using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace squeletteimplantation.Migrations
{
    public partial class Foreign_Key : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RelEnseignantEntreprise_Enseignant_NoEnseignant",
                table: "RelEnseignantEntreprise");

            migrationBuilder.DropForeignKey(
                name: "FK_RelEnseignantEntreprise_Entreprise_NoEntreprise",
                table: "RelEnseignantEntreprise");

            migrationBuilder.DropForeignKey(
                name: "FK_RelEnseignantEtudiant_Etudiant_NoDa",
                table: "RelEnseignantEtudiant");

            migrationBuilder.DropForeignKey(
                name: "FK_RelEnseignantEtudiant_Enseignant_NoEnseignant",
                table: "RelEnseignantEtudiant");

            migrationBuilder.AddForeignKey(
                name: "fk_Enseignant_relEnseignantEntreprise",
                table: "RelEnseignantEntreprise",
                column: "NoEnseignant",
                principalTable: "Enseignant",
                principalColumn: "NoEnseignant",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "fk_Entreprise_relEnseignantEtudiant",
                table: "RelEnseignantEntreprise",
                column: "NoEntreprise",
                principalTable: "Entreprise",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "fk_Etudiant_relEnseignantEtudiant",
                table: "RelEnseignantEtudiant",
                column: "NoDa",
                principalTable: "Etudiant",
                principalColumn: "NoDa",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "fk_Enseignant_relEnseignantEtudiant",
                table: "RelEnseignantEtudiant",
                column: "NoEnseignant",
                principalTable: "Enseignant",
                principalColumn: "NoEnseignant",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_Enseignant_relEnseignantEntreprise",
                table: "RelEnseignantEntreprise");

            migrationBuilder.DropForeignKey(
                name: "fk_Entreprise_relEnseignantEtudiant",
                table: "RelEnseignantEntreprise");

            migrationBuilder.DropForeignKey(
                name: "fk_Etudiant_relEnseignantEtudiant",
                table: "RelEnseignantEtudiant");

            migrationBuilder.DropForeignKey(
                name: "fk_Enseignant_relEnseignantEtudiant",
                table: "RelEnseignantEtudiant");

            migrationBuilder.AddForeignKey(
                name: "FK_RelEnseignantEntreprise_Enseignant_NoEnseignant",
                table: "RelEnseignantEntreprise",
                column: "NoEnseignant",
                principalTable: "Enseignant",
                principalColumn: "NoEnseignant",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RelEnseignantEntreprise_Entreprise_NoEntreprise",
                table: "RelEnseignantEntreprise",
                column: "NoEntreprise",
                principalTable: "Entreprise",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RelEnseignantEtudiant_Etudiant_NoDa",
                table: "RelEnseignantEtudiant",
                column: "NoDa",
                principalTable: "Etudiant",
                principalColumn: "NoDa",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RelEnseignantEtudiant_Enseignant_NoEnseignant",
                table: "RelEnseignantEtudiant",
                column: "NoEnseignant",
                principalTable: "Enseignant",
                principalColumn: "NoEnseignant",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
