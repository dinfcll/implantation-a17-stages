
import { Component } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Enseignant } from './models/enseignant.class';

import { Machin } from './models/machin.class';

import {  Router }   from '@angular/router';

import 'rxjs/add/operator/map'
declare var jBox:any;
@Component({
    selector: 'loginEnseignant',
    templateUrl: `./../html/indexConnexionEnseignantEtudiant.html`,
   
    styleUrls:[`./../css/style_page_accueil.css`],


})

export  class LoginEnseignantComponent { 
    public token: string;
    private enseignant: Enseignant;
    constructor(private http: Http,  private router: Router){ }

    Connexion(courriel: string, mdp: string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("api/Enseignant", JSON.stringify({courriel: courriel, motDePasse: mdp}), { headers: headers }).subscribe(
            Resultat=>
            {
                this.enseignant = Resultat.json() as Enseignant;

                if(Resultat.status == 200)
                    {
                         this.router.navigate(['/accueil-enseignant']);                
                         localStorage.setItem('var', JSON.stringify(this.enseignant));
                    }
                else
                    {
                        new jBox('Notice', {
                            content: "Mot de passe ou Nom d'utilisateur non valide",
                            color: 'red',
                            autoClose: 5000
                            }); 
                    }
            })
    }
}

