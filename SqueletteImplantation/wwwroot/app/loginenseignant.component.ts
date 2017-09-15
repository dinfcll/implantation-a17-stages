
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
    courriel : string;
    constructor(private http: Http,  private router: Router){
        this. getEnseignants();
    }

    getEnseignants():void{
        this.http.get("api/Professeur").subscribe(donnees => this.enseignants
        = donnees.json() as Enseignant[]);
    }
    
    Connexion(): boolean/*void*/{

       //console.log(this.enseignants.length);
        this.getEnseignants();
        var i=0;
         let result:boolean=false;
        while(i< this.enseignants.length && this.courriel != this.enseignants[i].NomUti&&this.mdp!=this.enseignants[i].MotDePasse)
            {
                i++;
            }
            if(i< this.enseignants.length)
                {
                     result =true;
                    // this.router.navigate(['/accueil-enseignant'])
                }
            
        return result;
     }
    

 }

