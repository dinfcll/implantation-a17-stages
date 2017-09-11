
import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

@Component({
    selector: 'listeEntreprise',
    template: `Je suis un composant super !
                <div *ngIf="entreprise">Yéééé ! {{ entreprises }} </div>
                <div *ngIf="!entreprise">Je n'ai rien reçu encore :(</div>`


})

export class MaListeEntrepriseComponent { 
    private entreprises: Entreprise[];

    constructor(private http: Http){
        this.getEntreprise();
    }

    getEntreprise():void{
        this.http.get("api/Entreprise").subscribe(donnees => this.entreprises
        = donnees.json() as Entreprise[]);
    }


 }

