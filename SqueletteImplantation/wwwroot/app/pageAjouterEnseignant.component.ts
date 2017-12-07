import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Enseignant } from './models/enseignant.class';
import { Router, RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
declare var jBox: any;

@Component({
    selector: 'Ajouter_Enseignant',
    templateUrl: `./../html/AjouterEnseignant.html`,
    styleUrls: [`./../css/AjouterEnseignant.css`],
})
export class PageAjouterEnseignant {
    EnseignantAjouter: Enseignant;
    constructor(private http: Http, private router: Router, private location: Location) {
        this.EnseignantAjouter = new Enseignant(-1,"","","","","Prof_123*");
    }


    Ajouter() {
      /*  if (!this.validation()) {
            this.jBoxMessage("red", "Attention!!! Vous avez saisi un caractère non valide dans statistique de confirmation.");
        }
        else {
            this.http.post("api/Entreprise/Ajouter", this.entrepriseAjouter).subscribe(Result => {
                if (Result.status == 200) {
                    this.jBoxMessage("green", "Entreprise ajoutée!");
                }
                else {
                    this.jBoxMessage("red", "Erreur lors de l'ajout de l'entreprise");
                }
            });
        }*/
    }

    goBack(): void {
        this.location.back();
    }


    validation() {
        if (this.EnseignantAjouter.courriel === "" || this.EnseignantAjouter.nom === "" || this.EnseignantAjouter.nomUti === "" || this.EnseignantAjouter.prenom === "")
        {
            this.jBoxMessage("red", "Veuillez remplir tout les champs!");
            return;
        }
           
        let ACommercialPositionEmail: number = this.EnseignantAjouter.courriel.search('@');
        let extension: string[] = this.EnseignantAjouter.courriel.split('@');
        if (extension.length != 2)
        {
            this.jBoxMessage("red", "Le courriel doit contenir un @");
            return;
        }
        let TrouverPoint: string[] = extension[1].split('.');
        if (TrouverPoint.length != 2)
        {
            this.jBoxMessage("red", "Format d'adresse courriel invalide");
            return;
        }
    }

    jBoxMessage(couleur: string, message: string) {

        new jBox('Notice', {
            content: message,
            color: couleur,
            autoClose: 5000
        });
    }
   
}
