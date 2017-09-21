"use strict";
var Entreprise = (function () {
    function Entreprise(NoEntreprise, Lieu, NoTel, Poste, PersonneResponsable, NbreConfirmation, NbrPeutEtre, NbreProbablementNon, NbreNon, NbreOui, date) {
        this.NoEntreprise = NoEntreprise;
        this.Lieu = Lieu;
        this.NoTel = NoTel;
        this.Poste = Poste;
        this.PersonneResponsable = PersonneResponsable;
        this.NbreConfirmation = NbreConfirmation;
        this.NbrPeutEtre = NbrPeutEtre;
        this.NbreProbablementNon = NbreProbablementNon;
        this.NbreOui = NbreOui;
        this.date = date;
    }
    return Entreprise;
}());
exports.Entreprise = Entreprise;
//# sourceMappingURL=entreprise.class.js.map