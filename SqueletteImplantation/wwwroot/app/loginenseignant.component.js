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
var LoginEnseignantComponent = (function () {
    function LoginEnseignantComponent(http, router) {
        this.http = http;
        this.router = router;
        this.getEnseignants();
    }
    LoginEnseignantComponent.prototype.getEnseignants = function () {
        var _this = this;
        this.http.get("api/machins").subscribe(function (donnees) { return _this.enseignants
            = donnees.json(); });
    };
    LoginEnseignantComponent.prototype.Connexion = function () {
        //console.log(this.enseignants.length);
        this.getEnseignants();
        var i = 0;
        var result = false;
        while (i < this.enseignants.length && this.courriel != this.enseignants[i].Truc) {
            i++;
        }
        if (i < this.enseignants.length) {
            result = true;
            // this.router.navigate(['/accueil-enseignant'])
        }
        return result;
    };
    LoginEnseignantComponent = __decorate([
        core_1.Component({
            selector: 'loginEnseignant',
            templateUrl: "./../html/indexConnexionEnseignantEtudiant.html",
            /*template: `Je suis un composant super !
           
           
            
            <div > Yéééé !
         
                 <input type="text" placeholder="votre courriel ou votre numéro d'employé" id="Prof" name="Courriel" [(ngModel)]="courriel"  required>
                 <button (click)="Connexion()" routerLink="/accueil-enseignant" routerLinkActive="active">Connexion</button>
            </div>
            `,*/
            styleUrls: ["./../css/style_page_accueil.css"],
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], LoginEnseignantComponent);
    return LoginEnseignantComponent;
}());
exports.LoginEnseignantComponent = LoginEnseignantComponent;
//# sourceMappingURL=loginenseignant.component.js.map