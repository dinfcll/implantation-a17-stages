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
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pageAccueilEnseignantComponent = (function () {
    function pageAccueilEnseignantComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    pageAccueilEnseignantComponent.prototype.Deconnexion = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/Login']);
    };
    pageAccueilEnseignantComponent.prototype.getEntreprise = function (annee) {
        var _this = this;
        this.http.get("api/Entreprise/" + annee).subscribe(function (donnees) {
            _this.entreprises = donnees.json();
        });
    };
    return pageAccueilEnseignantComponent;
}());
pageAccueilEnseignantComponent = __decorate([
    core_1.Component({
        selector: 'accueil_enseignant',
        templateUrl: "./../html/AccueilEnseignant.html",
        styleUrls: ["./../css/accueil_enseignant.css"],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], pageAccueilEnseignantComponent);
exports.pageAccueilEnseignantComponent = pageAccueilEnseignantComponent;
var _a, _b;
//# sourceMappingURL=pageAccueilEnseignant.component.js.map