"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enseignant = (function () {
    function Enseignant(nomutil, password) {
        this.m_NomUtilisateur = nomutil;
        this.m_password = password;
    }
    Object.defineProperty(Enseignant.prototype, "NoEns", {
        get: function () {
            return this.m_NoEnseignant;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Enseignant.prototype, "Password", {
        get: function () {
            return this.m_password;
        },
        enumerable: true,
        configurable: true
    });
    return Enseignant;
}());
exports.Enseignant = Enseignant;
//# sourceMappingURL=enseignant.js.map