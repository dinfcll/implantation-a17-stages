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
        private const string Annee = "2017";
        private const string recherchetxtbox = "2";
        Entreprise ent ;

        private readonly entreprisecontroller _entreprisecontroller;

        public entreprisecontrollerTests()
        {
            ent = new Entreprise();
                ent.PersonneResponsable = "6";
                ent.Lieu = "levis";
                ent.Notel ="trolo";
            var options = new DbContextOptionsBuilder<MaBd>()
                .UseInMemoryDatabase("DatabaseEntreprise-" + $"{Guid.NewGuid()}")
                .Options;

            var bdEnMemoire = new MaBd(options);

            _entreprisecontroller = new entreprisecontroller(bdEnMemoire);
        }

        [Fact]
        public void TestToutsEntreprises()
        {
            var resultat = _entreprisecontroller.Enregistrementbd(ent);
            var _vartest = (from b in _maBd.Entreprise
            where b.date==Annee
            select b);
            Assert.IsNotNull(_vartest);
         }
            
        
        
        [Fact]
        public IActionResult EnregistrementbdTests()
        {
            var resultat = _entreprisecontroller.Enregistrementbd(ent);
            Assert.Equal("trolo", ((resultat as OkObjectResult).Value as Entreprise).Notel);
            Assert.Equal("levis", ((resultat as OkObjectResult).Value as Entreprise).Lieu);
        }

        [Fact]
        public void TestToutsEntreprises2()
        {
            var resultat = _entreprisecontroller.Enregistrementbd(ent);
            ent.date = "2016";
            var resultat2 = _entreprisecontroller.Enregistrementbd(ent);
            var _vartest = _entreprisecontroller.ListeAnnees();
            Assert.Equal(2, ((resultat as OkObjectResult).Value as Entreprise).Count());         
         }
        [Fact]
        public void TestToutsEntreprises3()
        {
            var resultat = _entreprisecontroller.Enregistrementbd(ent);
            ent.date = "2016";
            var resultat = _entreprisecontroller.Enregistrementbd(ent);
            var result = _entreprisecontroller.Recherche(recherchetxtbox,Annee);
            Assert.Equal(1, ((resultat as OkObjectResult).Value as Entreprise).Count());         
         }
        
    }
}
