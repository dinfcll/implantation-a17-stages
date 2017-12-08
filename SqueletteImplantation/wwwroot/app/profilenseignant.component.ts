import { Component } from '@angular/core';

import {LoginEnseignantComponent} from './loginenseignant.component';
import { Location } from '@angular/common';
import { Enseignant } from './models/enseignant.class';
import {  Router }   from '@angular/router';
import { Http } from '@angular/http';
import { Etudiant } from './models/etudiant.class';
declare var jBox: any;

@Component({
    selector: 'profil-enseignant',
    styleUrls: [`./../css/detail_entreprise_etudiant.css`],
    templateUrl: `./../html/profilenseignant.html`,
})

export class ProfilEnseignantComponent {
    ens: any;
    user: string;
    //etudiants: Etudiant[];
    etudiant: Etudiant;

    constructor(private location: Location, private http: Http, private router: Router) {

        this.user = localStorage.getItem('var');
        this.ens = JSON.parse(this.user);
        this.Etudiantselonprof(1213);
    }

    goBack(): void {
        this.location.back();
    }

    Etudiantselonprof(NoEnseignant: number) {
        this.http.get("api/Etudiant/{" + NoEnseignant + "}").subscribe(donnees => {
            this.etudiant = donnees.json() as Etudiant

        });

    }



}