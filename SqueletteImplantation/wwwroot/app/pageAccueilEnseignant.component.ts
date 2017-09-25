
import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

import { Component } from '@angular/core';

import {  Router }   from '@angular/router';





@Component({
    selector: 'accueil_enseignant',

    templateUrl:`./../html/AccueilEnseignant.html`,
    styleUrls:[`./../css/accueil_enseignant.css`],
})

export class pageAccueilEnseignantComponent { 
    entreprises: Entreprise[];

    constructor(private http: Http, private router: Router){
  
        }

        Deconnexion(){
            localStorage.removeItem('currentUser');
            this.router.navigate(['/Login']);
        }
        getEntreprise(annee:string){

            this.http.get("api/Entreprise/" + annee).subscribe(
                donnees => {
                this.entreprises = donnees.json() as Entreprise[]               
                }    
            );
        }     
      }


