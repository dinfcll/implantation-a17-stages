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
var core_1 = require("@angulare/core");
var entreprise_1 = require("./entreprise");
var EntrepriseDetailComponent = (function () {
    function EntrepriseDetailComponent() {
    }
    return EntrepriseDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof entreprise_1.Entreprise !== "undefined" && entreprise_1.Entreprise) === "function" && _a || Object)
], EntrepriseDetailComponent.prototype, "entreprise", void 0);
EntrepriseDetailComponent = __decorate([
    core_1.Component({
        selector: 'entreprise-detail',
        templateUrls: "./../html/detail_entreprise.html",
    })
], EntrepriseDetailComponent);
exports.EntrepriseDetailComponent = EntrepriseDetailComponent;
var _a;
//l'ajouter dans le AppComponent(2eme html apres connection du professeur)  
//# sourceMappingURL=listentreprise.component.js.map