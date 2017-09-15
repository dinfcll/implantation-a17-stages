
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
    private enseignants: Enseignant[];
    mdp:string ;
    result:boolean;
    courriel : string;
    constructor(private http: Http,  private router: Router){
        this.enseignants=[];
        this.result=false;
        this.courriel="";
        this.mdp="";
    }

    getEnseignants():void{
        this.http.get("api/Enseignant").subscribe(donnees => {this.enseignants
        = donnees.json() as Enseignant[]
     var i=0;
        while(i< this.enseignants.length && this.courriel != "test" && this.mdp!="test")
            {
                console.log(this.enseignants[i].NomUti);
                console.log(this.courriel);
                i++;
            }
            if(i< this.enseignants.length)
                {
                   
                     this.result =true;
                     this.router.navigate(['/accueil-enseignant']);
                }
             console.log(this.enseignants[i].NomUti);
        return this.result;
});
    }
    
    
    

 }

