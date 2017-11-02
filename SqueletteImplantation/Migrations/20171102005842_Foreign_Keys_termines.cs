using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace squeletteimplantation.Migrations
{
    public partial class Foreign_Keys_termines : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Etudiant_Entreprise_EntrepriseId",
                table: "Etudiant");

            migrationBuilder.DropIndex(
                name: "IX_Etudiant_EntrepriseId",
                table: "Etudiant");

            migrationBuilder.DropColumn(
                name: "EntrepriseId",
                table: "Etudiant");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Etudiant",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Etudiant_Id",
                table: "Etudiant",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "fk_Entreprise_Etudiant",
                table: "Etudiant",
                column: "Id",
                principalTable: "Entreprise",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_Entreprise_Etudiant",
                table: "Etudiant");

            migrationBuilder.DropIndex(
                name: "IX_Etudiant_Id",
                table: "Etudiant");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Etudiant");

            migrationBuilder.AddColumn<int>(
                name: "EntrepriseId",
                table: "Etudiant",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Etudiant_EntrepriseId",
                table: "Etudiant",
                column: "EntrepriseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Etudiant_Entreprise_EntrepriseId",
                table: "Etudiant",
                column: "EntrepriseId",
                principalTable: "Entreprise",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
