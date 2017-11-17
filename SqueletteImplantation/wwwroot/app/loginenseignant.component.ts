
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
    isValid=true;
    public token: string;
    enseignant: Enseignant;
    constructor(private http: Http,  private router: Router){
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    Connexion(courriel: string, mdp: string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');



        this.http
            .post("api/Enseignant", JSON.stringify({courriel: courriel, motDePasse: mdp}), { headers: headers })
            .subscribe(r=>
            {
                this.enseignant = r.json() as Enseignant;
                console.log(r);
                var patate = r.json();
                console.log(patate);
               

                if(r.status == 200)
                    {
                         //naviguer plus loin
                         this.router.navigate(['/accueil-enseignant']);
                         
                         localStorage.setItem('var', JSON.stringify(this.enseignant));
                    }
                   
                else
                    {
                        //message erreur
                        if(r.status == 204)
                            {
                                this.isValid=false;
                                
                                new jBox('Notice', {
                                    content: 'Mot de passe invalide',
                                    color: 'red',
                                    autoClose: 5000
                                    }); 
                                console.log(this.isValid);
                            }
                         
                    }
                    
            })
    }
    
    
   
 }

