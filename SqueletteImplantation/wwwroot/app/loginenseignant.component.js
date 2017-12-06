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
        this.isValid = true;
    }
    LoginEnseignantComponent.prototype.Connexion = function (courriel, mdp) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("api/Enseignant", JSON.stringify({ courriel: courriel, motDePasse: mdp }), { headers: headers }).subscribe(function (Resultat) {
            _this.enseignant = Resultat.json();
            if (Resultat.status == 200) {
                //naviguer plus loin
                _this.router.navigate(['/accueil-enseignant']);
                localStorage.setItem('var', JSON.stringify(_this.enseignant));
            }
            else {
                //message erreur
                if (Resultat.status == 204) {
                    _this.isValid = false;
                    _this.jBoxMessage("red", "Mot de passe ou nom utilistateur invalide");
                }
            }
        });
    };
    LoginEnseignantComponent.prototype.ConnexionEtudiant = function (DAEtu, mdpEtu) {
        var _this = this;
        if (!this.validation(DAEtu, mdpEtu)) {
            this.jBoxMessage("red", "Vérifier que tous les champs sont remplis ou vérifier votre numero de DA(7 chiffres)");
            return;
        }
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("api/Etudiant", JSON.stringify({ noDa: DAEtu, motPasse: mdpEtu }), { headers: headers }).subscribe(function (Resultat) {
            _this.etudiant = Resultat.json();
            if (Resultat.status == 200) {
                //naviguer plus loin
                _this.router.navigate(['/accueil-etudiant']);
                localStorage.setItem('currentUser', JSON.stringify(_this.etudiant));
            }
            else {
                //message erreur
                if (Resultat.status == 204) {
                    _this.isValid = false;
                    _this.jBoxMessage("red", "Mot de passe ou numero de DA invalide");
                }
            }
        });
    };
    LoginEnseignantComponent.prototype.validation = function (DAEtu, mdpEtu) {
        if (DAEtu.toString().length == 0
            || isNaN(DAEtu)
            || mdpEtu.length == 0) {
            return false;
        }
        return true;
    };
    LoginEnseignantComponent.prototype.jBoxMessage = function (couleur, message) {
        new jBox('Notice', {
            content: message,
            color: couleur,
            autoClose: 5000
        });
    };
    return LoginEnseignantComponent;
}());
LoginEnseignantComponent = __decorate([
    core_1.Component({
        selector: 'loginEnseignant',
        templateUrl: "./../html/indexConnexionEnseignantEtudiant.html",
        styleUrls: ["./../css/style_page_accueil.css"],
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], LoginEnseignantComponent);
exports.LoginEnseignantComponent = LoginEnseignantComponent;
//# sourceMappingURL=loginenseignant.component.js.map