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
var MaListeEntrepriseComponent = (function () {
    function MaListeEntrepriseComponent(http) {
        this.http = http;
        this.getEntreprise();
    }
    MaListeEntrepriseComponent.prototype.getEntreprise = function () {
        var _this = this;
        this.http.get("api/Entreprise").subscribe(function (donnees) { return _this.entreprises
            = donnees.json(); });
    };
    return MaListeEntrepriseComponent;
}());
MaListeEntrepriseComponent = __decorate([
    core_1.Component({
        selector: 'listeEntreprise',
        template: "Je suis un composant super !\n                <div *ngIf=\"entreprise\">Y\u00E9\u00E9\u00E9\u00E9 ! {{ entreprises }} </div>\n                <div *ngIf=\"!entreprise\">Je n'ai rien re\u00E7u encore :(</div>"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], MaListeEntrepriseComponent);
exports.MaListeEntrepriseComponent = MaListeEntrepriseComponent;
//# sourceMappingURL=listentreprise.component.js.map