import { Component } from '@angular/core';
import { Enseignant } from './models/enseignant.class';
import { Http, Headers } from '@angular/http';
import {  Router }   from '@angular/router';
import 'rxjs/add/operator/map'

declare var jBox: any;

@Component({
    selector: 'loginEnseignant',
    templateUrl: `./../html/indexConnexionEnseignantEtudiant.html`,
    styleUrls:[`./../css/style_page_accueil.css`],
})

export  class LoginEnseignantComponent { 

    private isValid: boolean;
    private enseignant: Enseignant;

    constructor(private http: Http,  private router: Router){ 
        this.isValid=true;
    }

    Connexion(courriel: string, mdp: string) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("api/Enseignant", JSON.stringify({courriel: courriel, motDePasse: mdp}), { headers: headers }).subscribe(
            Resultat=> {
                this.enseignant = Resultat.json() as Enseignant;                                              
                if (Resultat.status == 200) {
                            this.router.navigate(['/accueil-enseignant']);
                            localStorage.setItem('var', JSON.stringify(this.enseignant));
                    } else {
                        if(Resultat.status == 204) {
                                this.isValid=false;
                                new jBox('Notice', {
                                    content: 'Mot de passe ou nom utilistateur invalide',
                                    color: 'red',
                                    autoClose: 5000
                                });   
                        }
                }
            })
    }
}

