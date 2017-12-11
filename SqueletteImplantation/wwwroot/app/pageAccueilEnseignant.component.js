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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var pageAccueilEnseignantComponent = (function () {
    function pageAccueilEnseignantComponent(http, router) {
        this.http = http;
        this.router = router;
        this.user = localStorage.getItem('currentUser');
        this.ens = JSON.parse(this.user);
    }
    pageAccueilEnseignantComponent.prototype.Deconnexion = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/Login']);
    };
    return pageAccueilEnseignantComponent;
}());
pageAccueilEnseignantComponent = __decorate([
    core_1.Component({
        selector: 'accueil_enseignant',
        templateUrl: "./../html/AccueilEnseignant.html",
        styleUrls: ["./../css/accueil_enseignant.css"],
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], pageAccueilEnseignantComponent);
exports.pageAccueilEnseignantComponent = pageAccueilEnseignantComponent;
//# sourceMappingURL=pageAccueilEnseignant.component.js.map