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
require("rxjs/add/operator/map");
var LoginEnseignantComponent = (function () {
    function LoginEnseignantComponent(http, router) {
        this.http = http;
        this.router = router;
        this.isValid = true;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    LoginEnseignantComponent.prototype.Connexion = function (courriel, mdp) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http
            .post("api/Enseignant", JSON.stringify({ courriel: courriel, motDePasse: mdp }), { headers: headers })
            .subscribe(function (r) {
            console.log(r);
            var patate = r.json();
            console.log(patate);
            // login successful if there's a jwt token in the response
            var token = r.json() && r.json().token;
            if (r.status == 200) {
                //naviguer plus loin
                _this.router.navigate(['/accueil-enseignant']);
                /************************** */
                // set token property
                _this.token = token;
                // store courriel and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ courriel: courriel, token: token }));
                /*************************** */
            }
            else {
                //message erreur
                if (r.status == 204) {
                    _this.isValid = false;
                    console.log("desolé, je n ai rien trouvé");
                    console.log(_this.isValid);
                }
            }
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