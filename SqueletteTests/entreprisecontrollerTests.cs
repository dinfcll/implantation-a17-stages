using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SqueletteImplantation.Controllers;
using System.Collections.Generic;
using System.Linq;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;
using Xunit;

namespace SqueletteTests
{
    public class entreprisecontrollerTests
    {
        //un commentaire
        //private const int UnNombreMagique = 42;
        private const string Annee = "2017";
        //private const int UnAutreNombre = 43;
        //private const string UnAutreTruc = "autretruc";

        private readonly entreprisecontroller _entreprisecontroller;

        public entreprisecontrollerTests()
        {
            var options = new DbContextOptionsBuilder<MaBd>()
                .UseInMemoryDatabase("DatabaseEntreprise-" + $"{Guid.NewGuid()}")
                .Options;

            var bdEnMemoire = new MaBd(options);

            _entreprisecontroller = new entreprisecontroller(bdEnMemoire);
        }

        [Fact]
        public void TestToutsEntreprises(string Annee)
        {
            var _vartest = (from b in _maBd.Entreprise
            where b.date==Annee
            select b);

            if(_listtest==NotFoundResult)
            
        }
        /*
        [Fact]
        public void TestInMemoryAddRetrieveMachin()
        {
            var created = _machinController.CreateMachin(new MachinDto {NombreMagique = UnNombreMagique, Truc = UnTruc});

            var resultat = _machinController.GetMachin(((created as OkObjectResult).Value as Machin).Id);

            Assert.Equal(UnNombreMagique, ((resultat as OkObjectResult).Value as Machin).NombreMagique);
            Assert.Equal(UnTruc, ((resultat as OkObjectResult).Value as Machin).Truc);
        }

        [Fact]
        public void TestInMemoryAddUpdateMachin()
        {
            var created = _machinController.CreateMachin(new MachinDto { NombreMagique = UnNombreMagique, Truc = UnTruc });

            var resultat = _machinController.ModifyMachin(new Machin
            {
                Id = ((created as OkObjectResult).Value as Machin).Id,
                NombreMagique = UnAutreNombre,
                Truc = UnAutreTruc
            });

            Assert.Equal(200, (resultat as OkResult).StatusCode);

            var updated = _machinController.GetMachin(((created as OkObjectResult).Value as Machin).Id);

            Assert.Equal(UnAutreNombre, ((updated as OkObjectResult).Value as Machin).NombreMagique);
            Assert.Equal(UnAutreTruc, ((updated as OkObjectResult).Value as Machin).Truc);
        }

        [Fact]
        public void TestCreateDelete()
        {
            var created = _machinController.CreateMachin(new MachinDto { NombreMagique = UnNombreMagique, Truc = UnTruc });

            var resultat = _machinController.DeleteMachin(((created as OkObjectResult).Value as Machin).Id);

            Assert.Equal(200, (resultat as OkResult).StatusCode);

            var entityNotFound = _machinController.GetMachin(((created as OkObjectResult).Value as Machin).Id);

            Assert.Equal(404, ((NotFoundResult)entityNotFound).StatusCode);
        }*/
    }
}
