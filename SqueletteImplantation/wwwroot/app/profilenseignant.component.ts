
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
    ens: Enseignant;
    user: string;
    etudiants: Etudiant[];
    AnneeRecherche: string;
    etudiant: Etudiant;
    PageInfo: boolean;
    Modifier: boolean;
    MotPasseActuel: string;
    PremierMotPAsse: string;
    DeuxiemeMotPasse: string;
    ModifMotPasse: boolean;

    constructor(private elementRef: ElementRef, private location: Location, private http: Http, private router: Router, private appservice: AppService) {

        this.user = localStorage.getItem('currentUser');
        this.ens = JSON.parse(this.user) as Enseignant;
        this.Etudiantselonprof();
        this.Modifier = false;
        this.PremierMotPAsse = "";
        this.DeuxiemeMotPasse = "";
        this.ModifMotPasse = false;
        this.MotPasseActuel = "";
    }

    goBack(): void {
        this.location.back();
    }

    Etudiantselonprof() {
        this.http.get("api/Etudiant/" + this.ens.noEnseignant.toString()).subscribe(donnees => {
            if (donnees.status != 200) {
                this.jBoxMessage("red", "Erreur lors de l'obtention des étudiants en relation!");
                return;
            }
            this.etudiants = donnees.json() as Etudiant[];
        });
    }

    jBoxMessage(couleur: string, message: string) {
        new jBox('Notice', {
            content: message,
            color: couleur,
            autoClose: 5000
        });
    }

    ActiverModification() {
        if (this.Modifier)
            this.Modifier = false;
        else
            this.Modifier = true;
    }
    ModificationMotPasse() {
        if (this.MotPasseActuel != this.ens.motDePasse) {
            this.jBoxMessage("red", "Mot de passe incorrect !");
            return;
        }
        if (this.PremierMotPAsse == "" || this.DeuxiemeMotPasse == "") {
            this.jBoxMessage("red", "Veuillez entrer votre nouveau mot de passe et le confirmer !");
            return;
        }
        if (this.PremierMotPAsse != this.DeuxiemeMotPasse) {
            this.jBoxMessage("red", "Les deux mots de passe ne correspondent pas !");
            return;
        }
        if (this.DeuxiemeMotPasse == this.ens.motDePasse) {
            this.jBoxMessage("red", "Veuillez saisir un mot de passe différent que celui actuel !");
            return;
        }
        this.ens.motDePasse = this.PremierMotPAsse;
        this.Modification();
    }
    ActiverModifMotPasse() {
        if (this.ModifMotPasse)
            this.ModifMotPasse = false;
        else
            this.ModifMotPasse = true;
    }
    ModifierInfo() {
        if (this.ens.courriel == "" || this.ens.nomUti == "") {
            this.jBoxMessage("red", "Veuillez entrer un nom d'utilisateur et un courriel !")
        }
        if (this.ens.courriel.indexOf('@') == -1) {
            this.jBoxMessage("red", "Le courriel est invalide !");
            return;
        }
        this.Modification();
    }
    Modification() {
        this.http.put("api/Enseignant/ModifierEnseignant", this.ens).subscribe(Resultat => {
            if (Resultat.status == 200) {
                this.jBoxMessage("green", "Modification du profil effectuée avec succès !");
                this.Modifier = false;
                this.ModifMotPasse = false;
            } else {
                this.jBoxMessage("red", "Erreur lors de la modification du profil");
            }
        });

    }
}