import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

import { Component } from '@angular/core';

import {  Router, RouterModule, Routes}   from '@angular/router';




@Component({
    selector: 'recherche_entreprise',
    templateUrl: `./../html/RechercheEntreprise.html`,
    styleUrls: [`./../css/accueil_enseignant.css`],
})

export class pageRechercheEntrepriseComponent
{
     entreprises: Entreprise[];
    annees: string;
    Recherche: string;
    TAnnees: String[];
    Checked: boolean;
    ListeCochee:Array<Number>;
    NombreEntrepriseCochee:number;
    constructor(private http: Http, private router: Router)
    {
        this.annees = "";
        this.Recherche = "";
        this.getEntreprise("", "");
        this.RemplirCombo();
        this.Checked = false;
        this.ListeCochee = new Array<Number>();
        this.NombreEntrepriseCochee = 0;
    }
    
    RemplirCombo() {
        this.http.get("api/Entreprise/RemplirCombo").subscribe(
            donnees => {
                this.TAnnees = donnees.json() as String[]
                console.log(this.TAnnees);
            });
    }
        
    getEntreprise(Recherche: string, annees: string) {
        let url: string;
        if ((Recherche == "" && annees == "")) {
            url = "api/Entreprise/annees";
        }
        else {
            if (Recherche != "" && annees == "") {
                url = " api/Entreprise/RechercheSansAnnee/" + Recherche;
            }
            else {
                if (Recherche == "" && annees != "") {
                    url = "api/Entreprise/RechercheAnnee/" + annees
                }
                else {
                    url = "api/Entreprise/" + annees + "/" + Recherche;
                }

            }
        }

        this.http.get(url).subscribe(
            donnees => {
                this.entreprises = donnees.json() as Entreprise[]
                console.log(this.entreprises);
            }
        );
    }
    CheckBoxChange(e:any)
    {
        let Coche: boolean = e.target.checked;
        console.log(Coche);
        console.log(e.target.value)
        if(Coche)
        {
            this.ListeCochee.push(e.target.value);
            this.NombreEntrepriseCochee++;
        }
        else
        {
            let IndexObjetSupprimer:number= this.ListeCochee.indexOf(e.target.value);
            if(IndexObjetSupprimer!=-1)
            this.ListeCochee.splice(IndexObjetSupprimer,1);
            this.NombreEntrepriseCochee--;
        }
    }    
}