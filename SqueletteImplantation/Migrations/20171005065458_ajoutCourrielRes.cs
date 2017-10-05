using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace squeletteimplantation.Migrations
{
    public partial class ajoutCourrielRes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CourrielRes",
                table: "Entreprise",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NomEntreprise",
                table: "Entreprise",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CourrielRes",
                table: "Entreprise");

            migrationBuilder.DropColumn(
                name: "NomEntreprise",
                table: "Entreprise");
        }
    }
}
