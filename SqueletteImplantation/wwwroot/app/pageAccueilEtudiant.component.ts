import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

import { Component } from '@angular/core';

import {  Router, RouterModule, Routes}   from '@angular/router';




@Component({
    selector: 'accueil_enseignant',

    templateUrl: `./../html/AccueilEtudiant.html`,
    //styleUrls: [`./../css/accueil_enseignant.css`],
})

export class pageAccueilEtudiantComponent
{
    etu: any;
    user:string;
    constructor(private http: Http, private router: Router)
    {
        this.user=localStorage.getItem('currentUser') ;
        this. etu = JSON.parse(this.user);
        console.log(this.etu);
    }
    

    Deconnexion() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/Login']);
    }
 

   

    

     
}

