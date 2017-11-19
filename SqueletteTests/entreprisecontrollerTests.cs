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
        Entreprise ent;
        MaBd bdEnMemoire;
        private readonly entreprisecontroller _entreprisecontroller;

        public entreprisecontrollerTests()
        {
            ent = new Entreprise();
            ent.personneresponsable = "6";
            ent.Id = 0;
            ent.lieu = "levis";
            ent.notel = "trolo";
            ent.date = "2017";
            var options = new DbContextOptionsBuilder<MaBd>()
                .UseInMemoryDatabase("DatabaseEntreprise-" + $"{Guid.NewGuid()}")
                .Options;

            bdEnMemoire = new MaBd(options);

            _entreprisecontroller = new entreprisecontroller(bdEnMemoire);
        }

        [Fact]
        public void EnregistrementbdTests()
        {
            var resultat = _entreprisecontroller.Enregistrementbd(ent);
            Assert.Equal("trolo", ((resultat as OkObjectResult).Value as Entreprise).notel);
            Assert.Equal("levis", ((resultat as OkObjectResult).Value as Entreprise).lieu);
        }

        [Fact]
        public void RetourMaxAnnee()
        {
            var _vartest = _entreprisecontroller.EntrepriseAnnee();
            Assert.NotNull(_vartest);
        }

        [Fact]
        public void RetourListeAnneeUnique()
        {
           ent.date = "2018";
            _entreprisecontroller.Enregistrementbd(ent);
            var objetok = _entreprisecontroller.ListeAnnees() as OkObjectResult;
            var resultat = objetok.Value;
            Assert.NotNull(resultat);
        }
        [Fact]
        public void RechercheAnneee()
        {
            ent.Id = 2;
            ent.date = "1997";
            _entreprisecontroller.Enregistrementbd(ent);
            ent.Id = 3;
            _entreprisecontroller.Enregistrementbd(ent);
            var okObject = _entreprisecontroller.EntrepriseRechercheAnnee("1997") as OkObjectResult;
            var Liste = okObject.Value;
            Assert.NotNull(Liste);
        }
    }
}
