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
var pageAccueilEnseignantComponent = (function () {
    //annee:string;
    function pageAccueilEnseignantComponent(http) {
        this.http = http;
        //this.Annee="2017";
        //this.getEntreprise(this.annee);
    }
    pageAccueilEnseignantComponent.prototype.getEntreprise = function (annee) {
        var _this = this;
        //if(this.Annee==null)
        this.http.get("api/Entreprise", JSON.stringify({ annee: annee })).subscribe(function (donnees) {
            _this.entreprises = donnees.json();
            if (donnees != null) {
                console.log(donnees);
            }
        });
    };
    pageAccueilEnseignantComponent = __decorate([
        core_1.Component({
            selector: 'accueil_enseignant',
            templateUrl: "./../html/AccueilEnseignant1.html",
            styleUrls: ["./../css/accueil_enseignant1.css"],
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], pageAccueilEnseignantComponent);
    return pageAccueilEnseignantComponent;
}());
exports.pageAccueilEnseignantComponent = pageAccueilEnseignantComponent;
//# sourceMappingURL=pageAccueilEnseignant.component.js.map