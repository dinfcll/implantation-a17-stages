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
    
    constructor(private http: Http, private router: Router)
    {
        this.annees = "";
        this.Recherche = "";
        this.getEntreprise("", "");
        this.RemplirCombo();
        
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

   

    

     
}