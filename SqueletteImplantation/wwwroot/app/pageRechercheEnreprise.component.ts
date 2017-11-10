import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

import { Component } from '@angular/core';

import {  Router, RouterModule, Routes}   from '@angular/router';
declare var jBox: any;



@Component({
    selector: 'recherche_entreprise',
    templateUrl: `./../html/RechercheEntreprise.html`,
    styleUrls: [`./../css/accueil_enseignant.css`],
})

export class pageRechercheEntrepriseComponent
{
    entreprises: Entreprise[];
    AnneeRecherche: string;
    AnneeCourante: string;
    Recherche: string;
    TAnnees: String[];
    constructor(private http: Http, private router: Router)
    {
        this.AnneeCourante = (new Date()).getFullYear().toString();
        this.AnneeRecherche = "";
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
   
    Supprimer(ID:number)
    {
        this.http.delete("api/Entreprise/Supprimer/" + ID.toString()).subscribe(
            donnee => {
                if (donnee.status != 200) {
                    this.jBoxMessage("green", "Entreprise supprimée avec succès!")
                }
                else
                {
                    this.jBoxMessage("red", "Erreur lors de la modification de l'entreprise!");
                }
            });
        this.getEntreprise(this.Recherche, this.AnneeRecherche);
    }
    AjouterAnnee(entreprise: Entreprise)
    {
        entreprise.date = this.AnneeCourante;
        this.http.post("api/Entreprise/Ajouter", entreprise).subscribe(Result => {
            if (Result.status == 200) {
                this.jBoxMessage("green", "Entreprise ajoutée à l'année courante!");
            }
            else {
                this.jBoxMessage("red", "Erreur lors de l'ajout de l'entreprise à l'année courante!");
            }
        });
        
    }
    jBoxMessage(couleur: string, message: string) {

        new jBox('Notice', {
            content: message,
            color: couleur,
            autoClose: 5000
        });
    }
}