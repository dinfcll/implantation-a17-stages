using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace squeletteimplantation.Migrations
{
    public partial class relensentId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_Entreprise_relEnseignantEtudiant",
                table: "RelEnseignantEntreprise");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RelEnseignantEntreprise",
                table: "RelEnseignantEntreprise");

            migrationBuilder.DropColumn(
                name: "NoEntreprise",
                table: "RelEnseignantEntreprise");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "RelEnseignantEntreprise",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_RelEnseignantEntreprise",
                table: "RelEnseignantEntreprise",
                columns: new[] { "Id", "NoEnseignant" });

            migrationBuilder.AddForeignKey(
                name: "fk_Entreprise_relEnseignantEtudiant",
                table: "RelEnseignantEntreprise",
                column: "Id",
                principalTable: "Entreprise",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_Entreprise_relEnseignantEtudiant",
                table: "RelEnseignantEntreprise");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RelEnseignantEntreprise",
                table: "RelEnseignantEntreprise");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "RelEnseignantEntreprise");

            migrationBuilder.AddColumn<int>(
                name: "NoEntreprise",
                table: "RelEnseignantEntreprise",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_RelEnseignantEntreprise",
                table: "RelEnseignantEntreprise",
                columns: new[] { "NoEntreprise", "NoEnseignant" });

            migrationBuilder.AddForeignKey(
                name: "fk_Entreprise_relEnseignantEtudiant",
                table: "RelEnseignantEntreprise",
                column: "NoEntreprise",
                principalTable: "Entreprise",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
