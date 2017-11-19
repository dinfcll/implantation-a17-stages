
import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

import { Component } from '@angular/core';

import {  Router, RouterModule, Routes}   from '@angular/router';




@Component({
    selector: 'accueil_enseignant',

    templateUrl: `./../html/AccueilEnseignant.html`,
    styleUrls: [`./../css/accueil_enseignant.css`],
})

export class pageAccueilEnseignantComponent
{
  
    constructor(private http: Http, private router: Router)
    {
    }
    

    Deconnexion() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/Login']);
    }
 

   

    

     
}



      