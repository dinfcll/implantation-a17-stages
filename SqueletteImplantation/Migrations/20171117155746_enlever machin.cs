using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace squeletteimplantation.Migrations
{
    public partial class enlevermachin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_Entreprise_Etudiant",
                table: "Etudiant");

            migrationBuilder.DropTable(
                name: "Machin");

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

            migrationBuilder.CreateTable(
                name: "Machin",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    NombreMagique = table.Column<int>(nullable: false),
                    Truc = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Machin", x => x.Id);
                });

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
