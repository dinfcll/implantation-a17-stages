import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Enseignant } from './models/enseignant.class';
import { Router, RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormBuilder, Validators } from '@angular/forms';


declare var jBox: any;

@Component({
    selector: 'Ajouter_Enseignant',
    templateUrl: `./../html/AjouterEnseignant.html`,
    styleUrls: [`./../css/AjouterEnseignant.css`],
})

export class PageAjouterEnseignant {
    EnseignantAjouter: Enseignant;
    constructor(private http: Http, private router: Router, private location: Location) {
       
        this.EnseignantAjouter = new Enseignant(-1,"","","","","Prof123*");
    }

    Ajouter() {
       if (this.validation()) {
            this.jBoxMessage("red", "Attention!!! vous avez un ou des champs vides !");
       } else {
           this.http.post("api/Enseignant/EnregistrementEnseignantbd", this.EnseignantAjouter).subscribe(Resultat => {
                if (Resultat.status == 200) {
                    this.jBoxMessage("green", "Enseignant ajouté!");
                } else {
                    if (Resultat.status == 204) {
                        this.jBoxMessage("red", "Veuillez saisir un autre nom d'utilisateur");
                    } else {
                        this.jBoxMessage("red", "Erreur lors de l'enregistrement de l'enseignant");
                    }
                }
           });
        }
    }

    Retour(): void {
        this.location.back();
    }

    validation(): boolean  {
        return (this.EnseignantAjouter.courriel === "" || this.EnseignantAjouter.nom === "" || this.EnseignantAjouter.nomUti === "" || this.EnseignantAjouter.prenom === "");
    }

    jBoxMessage(couleur: string, message: string) {

        new jBox('Notice', {
            content: message,
            color: couleur,
            autoClose: 5000
        });
    }
}
