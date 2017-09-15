
import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { Enseignant } from './models/enseignant.class';

import { Machin } from './models/machin.class';

import {  Router }   from '@angular/router';

@Component({
    selector: 'loginEnseignant',
    templateUrl: `./../html/indexConnexionEnseignantEtudiant.html`,
   /*template: `Je suis un composant super !
  
  
   
   <div > Yéééé ! 

        <input type="text" placeholder="votre courriel ou votre numéro d'employé" id="Prof" name="Courriel" [(ngModel)]="courriel"  required>
        <button (click)="Connexion()" routerLink="/accueil-enseignant" routerLinkActive="active">Connexion</button>
   </div>
   `,*/
    styleUrls:[`./../css/style_page_accueil.css`],


})

export class LoginEnseignantComponent { 
    private enseignants: Enseignant[];
    mdp:string ;
    result:boolean;
    courriel : string;
    constructor(private http: Http,  private router: Router){
        //this. getEnseignants();
        this.enseignants=[];
        this.result=false;
        this.courriel="";
        this.mdp="";
    }

    getEnseignants():void{
        this.http.get("api/Enseignant").subscribe(donnees => {this.enseignants
        = donnees.json() as Enseignant[]
     var i=0;
        while(i< this.enseignants.length && this.courriel != /*this.enseignants[i].NomUti*/"test" && this.mdp!="test"/*this.enseignants[i].MotDePasse*/)
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

