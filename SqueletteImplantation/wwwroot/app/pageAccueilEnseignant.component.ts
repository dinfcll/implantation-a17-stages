import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { Enseignant } from './models/enseignant.class'
import { Entreprise } from './models/entreprise.class';

@Component({

    selector: 'accueil_enseignant',
    templateUrl: `./../html/AccueilEnseignant.html`,
    styleUrls: [`./../css/accueil_enseignant.css`],
})

export class pageAccueilEnseignantComponent {
    user: any;
    ens: Enseignant;
    constructor(private http: Http, private router: Router) {
        this.user = localStorage.getItem('var');
        this.ens = JSON.parse(this.user) as Enseignant;

    }

    Deconnexion() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/Login']);
    }
}



      