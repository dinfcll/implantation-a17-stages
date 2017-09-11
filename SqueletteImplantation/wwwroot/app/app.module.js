"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var listenseignant_component_1 = require("./listenseignant.component");
var listentreprise_component_1 = require("./listentreprise.component");
var listetudiant_component_1 = require("./listetudiant.component");
var pageAccueilEnseignant_component_1 = require("./pageAccueilEnseignant.component");
var appRoutes = [
    {
        path: 'accueil-enseignant',
        component: pageAccueilEnseignant_component_1.pageAccueilEnseignantComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent,
            listenseignant_component_1.MaListeEnseignantComponent,
            listentreprise_component_1.MaListeEntrepriseComponent,
            listetudiant_component_1.MaListeEtudiantComponent,
            pageAccueilEnseignant_component_1.pageAccueilEnseignantComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map