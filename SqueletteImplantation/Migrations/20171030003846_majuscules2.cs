using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace squeletteimplantation.Migrations
{
    public partial class majuscules2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "nbreprobablementNon",
                table: "Entreprise",
                newName: "nbreprobablementnon");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "nbreprobablementnon",
                table: "Entreprise",
                newName: "nbreprobablementNon");
        }
    }
}
