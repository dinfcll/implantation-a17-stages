using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SqueletteImplantation.Migrations
{
    public partial class NoEnseignantEtudiantmap : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Etudiant_Enseignant",
                table: "Etudiant");

            migrationBuilder.AlterColumn<int>(
                name: "NoEnseignant",
                table: "Etudiant",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Etudiant_Enseignant",
                table: "Etudiant",
                column: "NoEnseignant",
                principalTable: "Enseignant",
                principalColumn: "NoEnseignant",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Etudiant_Enseignant",
                table: "Etudiant");

            migrationBuilder.AlterColumn<int>(
                name: "NoEnseignant",
                table: "Etudiant",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Etudiant_Enseignant",
                table: "Etudiant",
                column: "NoEnseignant",
                principalTable: "Enseignant",
                principalColumn: "NoEnseignant",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
