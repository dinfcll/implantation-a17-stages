import { Component } from '@angular/core';
import { Entreprise } from './models/entreprise.class';
import { Http } from '@angular/http';
import {NgModule} from '@angular/core';

@Component({
  selector: 'detail-entreprise',
  templateUrl: `./../html/DetailEntreprise.html`,
})
export class PageDetailEntrepriseComponent  {
    entreprise: Entreprise;
    ID: Number;
    SectionSupprimer: boolean;
    constructor(private http: Http)
    {
        this.SectionSupprimer = false;
    }

    RemplirInfo(ID: Number)
    {
        this.http.get("api/Entreprise/InfoParID/" + ID.toString()).subscribe(
            donnees => {
                this.entreprise = donnees.json() as Entreprise
                console.log(this.entreprise);
            });
    }
    AjouterAnnee() {


        }
    Modifier() {
        

    }



}