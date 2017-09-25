"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var loginenseignant_component_1 = require("./loginenseignant.component");
var pageAccueilEnseignant_component_1 = require("./pageAccueilEnseignant.component");
var appRoutes = [
    {
        path: '',
        component: loginenseignant_component_1.LoginEnseignantComponent,
        pathMatch: 'full',
    },
    {
        path: 'accueil-enseignant',
        component: pageAccueilEnseignant_component_1.pageAccueilEnseignantComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'Login',
        component: loginenseignant_component_1.LoginEnseignantComponent
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent,
                loginenseignant_component_1.LoginEnseignantComponent,
                pageAccueilEnseignant_component_1.pageAccueilEnseignantComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map