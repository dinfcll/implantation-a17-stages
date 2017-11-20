using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace squeletteimplantation.Migrations
{
    public partial class isRequiredId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_Entreprise_Etudiant",
                table: "Etudiant");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Etudiant",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "fk_Entreprise_Etudiant",
                table: "Etudiant",
                column: "Id",
                principalTable: "Entreprise",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_Entreprise_Etudiant",
                table: "Etudiant");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Etudiant",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "fk_Entreprise_Etudiant",
                table: "Etudiant",
                column: "Id",
                principalTable: "Entreprise",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
