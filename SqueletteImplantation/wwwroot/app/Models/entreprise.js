"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entreprise = (function () {
    function Entreprise(NoEntreprise, NoTel, Poste, Personne_Responsable, NbrConfirmation, NbrPeutetre, NbreProblamentNon, NbreDeRefus, Annee) {
        this.m_NoEntreprise = NoEntreprise;
        this.m_NoTel = NoTel;
        this.m_Personne_Responsable = Personne_Responsable;
        this.m_NbrConfirmation = NbrConfirmation;
        this.m_NbrPeutetre = NbrPeutetre;
        this.m_NbreProblamentNon = NbreProblamentNon;
        this.m_NbreDeRefus = NbreDeRefus;
        this.m_Annee = Annee;
    }
    Object.defineProperty(Entreprise.prototype, "NoEnt", {
        get: function () {
            return this.m_NoEntreprise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entreprise.prototype, "Notel", {
        get: function () {
            return this.m_NoTel;
        },
        enumerable: true,
        configurable: true
    });
    Entreprise.prototype.set = function (tel) {
        this.m_NoTel = tel;
    };
    Object.defineProperty(Entreprise.prototype, "PersResp", {
        get: function () {
            return this.m_Personne_Responsable;
        },
        set: function (pers) {
            this.m_Personne_Responsable = pers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entreprise.prototype, "NbConfirmation", {
        get: function () {
            return this.m_NbrConfirmation;
        },
        set: function (nbre) {
            this.m_NbrConfirmation = nbre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entreprise.prototype, "NbPeutetre", {
        get: function () {
            return this.m_NbrPeutetre;
        },
        set: function (nbre) {
            this.m_NbrPeutetre = nbre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entreprise.prototype, "NbProblamentNon", {
        get: function () {
            return this.m_NbreProblamentNon;
        },
        set: function (nbre) {
            this.m_NbreProblamentNon = nbre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entreprise.prototype, "NbDeRefus", {
        get: function () {
            return this.NbDeRefus;
        },
        set: function (nbre) {
            this.m_NbreDeRefus = nbre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entreprise.prototype, "Annee", {
        get: function () {
            return this.m_Annee;
        },
        set: function (an) {
            this.m_Annee = an;
        },
        enumerable: true,
        configurable: true
    });
    return Entreprise;
}());
exports.Entreprise = Entreprise;
//# sourceMappingURL=entreprise.js.map