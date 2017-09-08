"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Etudiant = (function () {
    function Etudiant(noda, password) {
        this.m_NoDA = noda;
        this.m_password = password;
    }
    Object.defineProperty(Etudiant.prototype, "NoDa", {
        get: function () {
            return this.m_NoDA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Etudiant.prototype, "Password", {
        get: function () {
            return this.m_password;
        },
        enumerable: true,
        configurable: true
    });
    return Etudiant;
}());
exports.Etudiant = Etudiant;
//# sourceMappingURL=etudiant.js.map