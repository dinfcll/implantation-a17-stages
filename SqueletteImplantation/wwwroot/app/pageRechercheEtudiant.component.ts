import { AppService } from "./app.service";
import { Component, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import {  Router, RouterModule, Routes}   from '@angular/router';

import { Etudiant } from './models/etudiant.class';





import { Enseignant } from './models/enseignant.class';

declare var jBox:any;
@Component({
    host: {
        '(document:click)': 'verifClickDansComposant($event)',
    },
  templateUrl: `./../html/PageRechercheEtudiant.html`,
  styleUrls:[`./../css/RechercheEtudiant.css`],
})

export class PageRechercheEtudiantComponent  { 
  filteredList:any[];
  Tnometudiant: string[];
  etudiants: Etudiant[];
    

  
  
  annees: string;
  Recherche: string;
  TAnnees: String[];
  
  constructor(private elementRef: ElementRef,  private service: AppService,private http: Http, private router: Router) {
    this. TAnnees=[];
    this.filteredList=[];
    this.annees = "";
    this.Recherche = "";
    this.getEtudiant("","");
    this.RemplirComboAnneeEtudiant();
    this.AutocompleteEtudiant(); 
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
                this.jBoxMessage("red", "Aucune occurence ne peux �tre affich�e!");
            }
        });
    } else {
        this.etudiants = null;
    }

  }
    RemplirComboAnneeEtudiant() {
    this.http.get("api/Etudiant/RemplirComboAnneeEtudiant").subscribe(
        donnees => {
            if (donnees.status == 200) {
                this.TAnnees = donnees.json() as string[]
                this.getEtudiant(this.Recherche, this.annees);
            } else {
                this.jBoxMessage("red", "Aucune ann�e trouv�e!");
            }
        });
    } 

    Supprimer(no : number,Nom:string): void { 
        var r = confirm("Voulez-vous supprimer l'étudiant "+Nom.toString());
    if (r == true) {
        this.http.delete("api/Etudiant/SupprimerEtudiant/" + no).subscribe(donne => {
            if (donne.status == 200) {
                this.jBoxMessage("green", "Supression effectuée avec succès!");        
                this.RemplirComboAnneeEtudiant();
                this.getEtudiant(this.Recherche, this.annees);
            } else {
                this.jBoxMessage("red", "Erreur lors de la suppression de l'entreprise.")
            }
        });
    }}

    jBoxMessage(couleur: string, message: string) {
          new jBox('Notice', {
              content: message,
              color: couleur,
              autoClose: 5000
          });
    }



PageModif():void
{
    this.service.changeFlag(true);
}


AutocompleteEtudiant() {
    this.http.get("api/Etudiant/autocomplete").subscribe(
        donnees => {
            this.Tnometudiant = donnees.json() as string[]
            console.log(this.Tnometudiant);
        });
    } 


    filter() {
        if (this.Recherche !== "") {
            this.filteredList = this.Tnometudiant.filter(function(el:any) {
                return el.toLowerCase().indexOf(this.Recherche.toLowerCase()) > -1;
            }.bind(this));
        }else{
            this.filteredList = [];
        }
    }
 
    select(item: any){
        this.Recherche = item;
        this.filteredList = [];
    }

    verifClickDansComposant(event: any){
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
           clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
         if(!inside) {
             this.filteredList = [];
         }
     }
}