
import { Component, ElementRef } from '@angular/core';
import {LoginEnseignantComponent} from './loginenseignant.component';
import { Location } from '@angular/common';
import { Enseignant } from './models/enseignant.class'; 
import { Router, RouterModule, Routes } from '@angular/router';
import { Http } from '@angular/http';
import { AppService } from './app.service';
import { Etudiant } from './models/etudiant.class';
import { Entreprise } from './models/entreprise.class';
declare var jBox: any;

@Component({
    selector: 'profil-enseignant',
    styleUrls: [`./../css/detail_entreprise_etudiant.css`],
    templateUrl: `./../html/profilenseignant.html`,
})

export class ProfilEnseignantComponent {
    ens: any;
    user: string;
    etudiants: Etudiant[];
    AnneeRecherche: string;
    etudiant: Etudiant;
    PageInfo: boolean;
    annees: string;
    Recherche: string;
    TAnnees: String[];

    constructor(private elementRef: ElementRef, private location: Location, private http: Http, private router: Router, private appservice: AppService) {

        this.user = localStorage.getItem('var');
        this.ens = JSON.parse(this.user);
        this.TAnnees = [];
        this.annees = "";
        this.AnneeRecherche = ""; 
        this.Recherche = "";
        this.getEtudiant("", "");
        this.RemplirComboAnneeEtudiant();
        this.RemplirCombo()
        this.appservice.changeFlag(false);
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
    RemplirComboAnneeEtudiant() {
        this.http.get("api/Etudiant/RemplirComboAnneeEtudiant").subscribe(
            donnees => {
                if (donnees.status == 200) {
                    this.TAnnees = donnees.json() as string[]
                    this.getEtudiant(this.Recherche, this.annees);
                } else {
                    this.jBoxMessage("red", "Aucune année trouvée!");
                }
            });
    } 
    getEtudiant(Recherche: string, annees: string) {
        let url: string;
        if ((Recherche == "" && annees == "")) {
            url = "api/Etudiant/annees";
        } else {
            if (Recherche != "" && annees == "") {
                url = " api/Etudiant/RechercheSansAnnee/" + Recherche;
            } else {
                if (Recherche == "" && annees != "") {
                    url = "api/Etudiant/RechercheAnnee/" + annees
                } else {
                    url = "api/Etudiant/" + annees + "/" + Recherche;
                }
            }
        }

        if (this.TAnnees.length != 0) {
            this.http.get(url).subscribe(donnees => {
                if (donnees.status == 200) {
                    this.etudiants = donnees.json() as Etudiant[]
                } else {
                    this.jBoxMessage("red", "Aucune occurence ne peux être affichée!");
                }
            });
        } else {
            this.etudiants = null;
        }

    }
    jBoxMessage(couleur: string, message: string) {
        new jBox('Notice', {
            content: message,
            color: couleur,
            autoClose: 5000
        });
    }
    getEntreprise(Recherche: string, annees: string) {
        let url: string;
        this.Recherche = Recherche;
        this.AnneeRecherche = annees;
        if ((Recherche == "" && annees == "")) {
            url = "api/Entreprise/annees";
        }
    }
    RemplirCombo() {
        this.http.get("api/Entreprise/RemplirCombo").subscribe(
            donnees => {

                if (donnees.status == 200) {
                    this.TAnnees = donnees.json() as string[]
                    this.getEntreprise(this.Recherche, this.AnneeRecherche);
                } else {
                    this.jBoxMessage("red", "Aucune année trouvée!");
                }
            });
    }

    ModifierFlagAppServiceDetail() {
        this.appservice.changeFlag(true);
    }
}