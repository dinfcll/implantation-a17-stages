
import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { Enseignant } from './models/enseignant.class';

@Component({
    selector: 'listeEnseignant',
    template: `Je suis un composant super !
                <div *ngIf="enseignants">Yéééé ! {{ enseignants }} </div>
                <div *ngIf="!enseignants">Je n'ai rien reçu encore :(</div>`


})

export class MaListeEnseignantComponent { 
    private enseignants: Enseignant[];

    constructor(private http: Http){
        this.getEnseignants();
    }

    getEnseignants():void{
        this.http.get("api/Professeur").subscribe(donnees => this.enseignants
        = donnees.json() as Enseignant[]);
    }


 }

