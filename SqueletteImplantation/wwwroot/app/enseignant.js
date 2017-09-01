"use strict";
var Enseignant = (function () {
    function Enseignant(username, password) {
        this.m_username = username;
        this.m_password = password;
    }
    Object.defineProperty(Enseignant.prototype, "Username", {
        get: function () {
            return this.m_username;
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