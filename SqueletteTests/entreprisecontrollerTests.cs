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
            ent.NoEntreprise = 0;
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
            ent.Id = 1;
            _entreprisecontroller.Enregistrementbd(ent);
            var _vartest = (IEnumerable<string>)_entreprisecontroller.ListeAnnees();
            Assert.Equal(1, _vartest.Count());
        }
        [Fact]
        public void RechercheAnneee()
        {
            ent.Id = 2;
            ent.date = "1997";
            _entreprisecontroller.Enregistrementbd(ent);
            ent.Id = 3;
            _entreprisecontroller.Enregistrementbd(ent);
            var result = (IEnumerable<Entreprise>)_entreprisecontroller.EntrepriseRechercheAnnee("1997");
            Assert.Equal(2, (result).Count());
        }
    }
}
