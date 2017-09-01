"use strict";
var Etudiant = (function () {
    function Etudiant(id, password) {
        this.m_id = id;
        this.m_password = password;
    }
    Object.defineProperty(Etudiant.prototype, "ID", {
        get: function () {
            return this.m_id;
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