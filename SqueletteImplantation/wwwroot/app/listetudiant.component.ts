import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { Etudiant } from './models/etudiant.class';

@Component({
    selector: 'listeEtudiant',
    template: `Je suis un composant super !
                <div *ngIf="etudiants">Yéééé ! {{ etudiants }} </div>
                <div *ngIf="!etudiants">Je n'ai rien reçu encore :(</div>`


})

export class MaListeEtudiantComponent { 
    private etudiants: Etudiant[];

    constructor(private http: Http){
        this.getEtudiant();
    }

    getEtudiant():void{
        this.http.get("api/Etudiant").subscribe(donnees => this.etudiants
        = donnees.json() as Etudiant[]);
    }


 }
