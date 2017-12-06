import { Component } from '@angular/core';
import { Enseignant } from './models/enseignant.class';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Location } from '@angular/common';
declare var jBox: any;

@Component({
    selector: 'GestionEnseignant',
    templateUrl: `./../html/gestiondenseignant.html`,
    styleUrls: ['./../css/gestionenseignant.css'],
})

export class GestionEnseignant {
    TEnseignant: Enseignant[];
    constructor(private http: Http, private router: Router,private location:Location) {
        this.RemplirTEnseignant();
    }

    RemplirTEnseignant() {
        this.http.get('api/Enseignant/ListeEnseignant').subscribe(Result => {
            if (Result.status != 200) {
                this.jBoxMessage("red", "Erreur lors de l'aquisitions des enseignants");
            } else {
                this.TEnseignant = Result.json() as Enseignant[];
            }
        });
    }

    Supprimer(NoEnseignant: number) {
        this.http.delete('api/Enseignant/SupprimerEnseignant/' + NoEnseignant.toString()).subscribe(Resultat => {
            if (Resultat.status != 200) {
                this.jBoxMessage("red", "Erreur lors de l'aquisitions des enseignants");
            } else {
                this.jBoxMessage("green", "Suppression effectuée avec succès!");
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
    Retour(): void {
        this.location.back();
    }
}

