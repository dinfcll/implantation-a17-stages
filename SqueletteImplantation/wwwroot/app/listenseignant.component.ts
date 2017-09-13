
import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { Enseignant } from './models/enseignant.class';

import { Machin } from './models/machin.class';

@Component({
    selector: 'listeEnseignant',
    templateUrl: `./../html/indexConnexionEnseignantEtudiant.html`,
    styleUrls:[`./../css/style_page_accueil.css`],


})

export class MaListeEnseignantComponent { 
    private enseignants: Machin[];
   
    courriel : string;
    constructor(private http: Http){
        this.getEnseignants();
    }

    getEnseignants():void{
        this.http.get("api/machins").subscribe(donnees => this.enseignants
        = donnees.json() as Machin[]);
    }
    
    Connexion(): boolean{

        var i=0;
         let result:boolean=false;
        while(i< this.enseignants.length && this.courriel != this.enseignants[i].Truc)
            {
                i++;
            }
            if(i< this.enseignants.length)
                {
                     result =true;
                }

        return result;
    }

 }

