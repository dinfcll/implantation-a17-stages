
import { Http } from '@angular/http';

import { Etudiant } from './models/etudiant.class';

import { Component } from '@angular/core';

import {  Router, RouterModule, Routes}   from '@angular/router';

@Component({
  templateUrl: `./../html/PageRechercheEtudiant.html`,
  styleUrls:[`./../css/accueil_enseignant.css`],
})
export class PageRechercheEtudiantComponent  {  

  etudiants: Etudiant[];
  selectedItems: any = [];
  annees: string;
  Recherche: string;
  TAnnees: String[];
  constructor(private http: Http, private router: Router)
  {
    this.annees = "";
    this.Recherche = "";
     this.getEtudiant("","");
     /* this.Test2();
      this.Test3();*/
      this.RemplirComboAnneeEtudiant();
      
  }

  getEtudiant(Recherche: string, annees: string) {
    let url: string;
    if ((Recherche == "" && annees == "")) {
        url = "api/Etudiant/annees";
    }
    else {
        if (Recherche != "" && annees == "") {
            url = " api/Etudiant/RechercheSansAnnee/" + Recherche;
        }
        else {
            if (Recherche == "" && annees != "") {
                url = "api/Etudiant/RechercheAnnee/" + annees
            }
            else {
                url = "api/Etudiant/" + annees + "/" + Recherche;
            }

        }
    }

    this.http.get(url).subscribe(
        donnees => {
            this.etudiants = donnees.json() as Etudiant[]
            console.log(this.etudiants);
           
            
        }
    );

      }
      RemplirComboAnneeEtudiant() {
        this.http.get("api/Etudiant/RemplirComboAnneeEtudiant").subscribe(
            donnees => {
                this.TAnnees = donnees.json() as String[]
                console.log(this.TAnnees);
            });
        } 

        supprimerEtudiant(etudiant : Etudiant, e : any) {
          
                  var index = this.selectedItems.indexOf(etudiant.NoDa);
                  if (e.target.checked) {
                      if (index === -1) {
                          this.selectedItems.push(etudiant.NoDa);
                      }
                  } else {
                      if (index !== -1) {
                          this.selectedItems.splice(index, 1);
                      }
                  }
                  console.log(this.selectedItems);
              }

  /*    Test2() {
        let no:number;
        no=1212;
        this.http.get("api/Enseignant/"+no).subscribe(
            donnees => {
                this.etudiants = donnees.json() as Etudiant[]
                console.log(this.etudiants);
            });
    
          }


          Test3() {
            let no:number;
            no=1443434;
            this.http.get("api/Etudiant/"+no).subscribe(
                donnees => {
                    this.etudiants = donnees.json() as Etudiant[]
                    console.log(this.etudiants);
                });
        
              }*/
    












}