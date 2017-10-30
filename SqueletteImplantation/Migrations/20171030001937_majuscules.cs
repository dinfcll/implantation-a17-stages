using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace squeletteimplantation.Migrations
{
    public partial class majuscules : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Poste",
                table: "Entreprise",
                newName: "poste");

            migrationBuilder.RenameColumn(
                name: "PersonneResponsable",
                table: "Entreprise",
                newName: "personneresponsable");

            migrationBuilder.RenameColumn(
                name: "NomEntreprise",
                table: "Entreprise",
                newName: "nomentreprise");

            migrationBuilder.RenameColumn(
                name: "NoTel",
                table: "Entreprise",
                newName: "noTel");

            migrationBuilder.RenameColumn(
                name: "NbreProbablementNon",
                table: "Entreprise",
                newName: "nbreprobablementNon");

            migrationBuilder.RenameColumn(
                name: "NbreOui",
                table: "Entreprise",
                newName: "nbreoui");

            migrationBuilder.RenameColumn(
                name: "NbreNon",
                table: "Entreprise",
                newName: "nbrenon");

            migrationBuilder.RenameColumn(
                name: "NbreConfirmation",
                table: "Entreprise",
                newName: "nbreconfirmation");

            migrationBuilder.RenameColumn(
                name: "NbrPeutEtre",
                table: "Entreprise",
                newName: "nbrpeutetre");

            migrationBuilder.RenameColumn(
                name: "Lieu",
                table: "Entreprise",
                newName: "lieu");

            migrationBuilder.RenameColumn(
                name: "CourrielRes",
                table: "Entreprise",
                newName: "courrielres");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "poste",
                table: "Entreprise",
                newName: "Poste");

            migrationBuilder.RenameColumn(
                name: "personneresponsable",
                table: "Entreprise",
                newName: "PersonneResponsable");

            migrationBuilder.RenameColumn(
                name: "nomentreprise",
                table: "Entreprise",
                newName: "NomEntreprise");

            migrationBuilder.RenameColumn(
                name: "noTel",
                table: "Entreprise",
                newName: "NoTel");

            migrationBuilder.RenameColumn(
                name: "nbrpeutetre",
                table: "Entreprise",
                newName: "NbrPeutEtre");

            migrationBuilder.RenameColumn(
                name: "nbreprobablementNon",
                table: "Entreprise",
                newName: "NbreProbablementNon");

            migrationBuilder.RenameColumn(
                name: "nbreoui",
                table: "Entreprise",
                newName: "NbreOui");

            migrationBuilder.RenameColumn(
                name: "nbrenon",
                table: "Entreprise",
                newName: "NbreNon");

            migrationBuilder.RenameColumn(
                name: "nbreconfirmation",
                table: "Entreprise",
                newName: "NbreConfirmation");

            migrationBuilder.RenameColumn(
                name: "lieu",
                table: "Entreprise",
                newName: "Lieu");

            migrationBuilder.RenameColumn(
                name: "courrielres",
                table: "Entreprise",
                newName: "CourrielRes");
        }
    }
}
