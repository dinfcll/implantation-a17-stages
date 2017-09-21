
import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

import { Component } from '@angular/core';





@Component({
    selector: 'accueil_enseignant',

    templateUrl:`./../html/AccueilEnseignant.html`,
    styleUrls:[`./../css/accueil_enseignant.css`],
})

export class pageAccueilEnseignantComponent { 
    entreprises: Entreprise[];
   

    constructor(private http: Http){
        //this.Annee="2017";
        
        }


        getEntreprise(Annee:string):void{
            //if(this.Annee==null)
            this.http.get("api/Enseignant", JSON.stringify({Annee})).subscribe(donnees => {this.entreprises
                = donnees.json() as Entreprise[];
        
        }
    
    
    
    
    
    }


