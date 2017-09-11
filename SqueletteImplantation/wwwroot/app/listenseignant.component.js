"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var MaListeEnseignantComponent = (function () {
    function MaListeEnseignantComponent(http) {
        this.http = http;
        this.getEnseignants();
    }
    MaListeEnseignantComponent.prototype.getEnseignants = function () {
        var _this = this;
        this.http.get("api/Professeur").subscribe(function (donnees) { return _this.enseignants
            = donnees.json(); });
    };
    return MaListeEnseignantComponent;
}());
MaListeEnseignantComponent = __decorate([
    core_1.Component({
        selector: 'listeEnseignant',
        template: "Je suis un composant super !\n                <div *ngIf=\"enseignants\">Y\u00E9\u00E9\u00E9\u00E9 ! {{ enseignants }} </div>\n                <div *ngIf=\"!enseignants\">Je n'ai rien re\u00E7u encore :(</div>"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], MaListeEnseignantComponent);
exports.MaListeEnseignantComponent = MaListeEnseignantComponent;
//# sourceMappingURL=listenseignant.component.js.map