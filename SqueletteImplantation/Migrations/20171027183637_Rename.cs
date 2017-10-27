using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace squeletteimplantation.Migrations
{
    public partial class Rename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Etudiant_Entreprise_EntrepriseNoEntreprise",
                table: "Etudiant");

            migrationBuilder.RenameColumn(
                name: "EntrepriseNoEntreprise",
                table: "Etudiant",
                newName: "EntrepriseId");

            migrationBuilder.RenameIndex(
                name: "IX_Etudiant_EntrepriseNoEntreprise",
                table: "Etudiant",
                newName: "IX_Etudiant_EntrepriseId");

            migrationBuilder.RenameColumn(
                name: "NoEntreprise",
                table: "Entreprise",
                newName: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Etudiant_Entreprise_EntrepriseId",
                table: "Etudiant",
                column: "EntrepriseId",
                principalTable: "Entreprise",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Etudiant_Entreprise_EntrepriseId",
                table: "Etudiant");

            migrationBuilder.RenameColumn(
                name: "EntrepriseId",
                table: "Etudiant",
                newName: "EntrepriseNoEntreprise");

            migrationBuilder.RenameIndex(
                name: "IX_Etudiant_EntrepriseId",
                table: "Etudiant",
                newName: "IX_Etudiant_EntrepriseNoEntreprise");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Entreprise",
                newName: "NoEntreprise");

            migrationBuilder.AddForeignKey(
                name: "FK_Etudiant_Entreprise_EntrepriseNoEntreprise",
                table: "Etudiant",
                column: "EntrepriseNoEntreprise",
                principalTable: "Entreprise",
                principalColumn: "NoEntreprise",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
