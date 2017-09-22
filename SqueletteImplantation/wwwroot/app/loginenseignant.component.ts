
import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { Enseignant } from './models/enseignant.class';

import { Machin } from './models/machin.class';

import {  Router }   from '@angular/router';

@Component({
    selector: 'loginEnseignant',
    templateUrl: `./../html/indexConnexionEnseignantEtudiant.html`,
   
    styleUrls:[`./../css/style_page_accueil.css`],


})

export class LoginEnseignantComponent { 
    
    constructor(private http: Http,  private router: Router){
        
    }

    Connexion(courriel: string, mdp: string) {
        this.http
            .post("api/Enseignant", JSON.stringify({courriel, mdp}))
            .subscribe(r=>
            {
                if(r!= null)
                    {
                         //naviguer plus loin
                         this.router.navigate(['/accueil-enseignant']);
                    }
                   
                else
                    {
                        //message erreur
                         console.log("desolé, je n ai rien trouvé");
                    }
                    
            })
    }
    
    
    

 }

