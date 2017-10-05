
import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

import { Component } from '@angular/core';

import {  Router, RouterModule, Routes}   from '@angular/router';

import { PageRechercheEtudiantComponent } from "./pageRechercheEtudiant.component";


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
        
        

       /* const appRoutes: Routes=[

            {
                path: 'recherche-etudiant', 
                component: PageRechercheEtudiantComponent 
              },

        ]*/





      }

      //export const routing = RouterModule.forRoot(appRoutes);
     /* @NgModule({
        imports: [
          RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
          )
          // other imports here
        ],
        ...
      })*/

      