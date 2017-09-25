
import { Component } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Enseignant } from './models/enseignant.class';

import { Machin } from './models/machin.class';

import {  Router }   from '@angular/router';

@Component({
    selector: 'loginEnseignant',
    templateUrl: `./../html/indexConnexionEnseignantEtudiant.html`,
   
    styleUrls:[`./../css/style_page_accueil.css`],


})

export class LoginEnseignantComponent { 
    isValid=true;
    constructor(private http: Http,  private router: Router){
        
    }

    Connexion(courriel: string, mdp: string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');



        this.http
            .post("api/Enseignant", JSON.stringify({courriel: courriel, motDePasse: mdp}), { headers: headers })
            .subscribe(r=>
            {
                console.log(r);
                var patate = r.json();
                console.log(patate);

                if(r.status == 200)
                    {
                         //naviguer plus loin
                         this.router.navigate(['/accueil-enseignant']);
                    }
                   
                else
                    {
                        //message erreur
                        if(r.status == 204)
                            {
                                this.isValid=false;
                                console.log("desolé, je n ai rien trouvé");
                                console.log(this.isValid);
                            }
                         
                    }
                    
            })
    }
    
    
    

 }

