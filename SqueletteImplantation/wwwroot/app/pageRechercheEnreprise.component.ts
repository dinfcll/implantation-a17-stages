import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

import { Component,ElementRef} from '@angular/core';

import {  Router, RouterModule, Routes}   from '@angular/router';




@Component({
    selector: 'recherche_entreprise',
    host: {
        '(document:click)': 'verifClickDansComposant($event)',
    },
    templateUrl: `./../html/RechercheEntreprise.html`,
    styleUrls: [`./../css/accueil_enseignant.css`],
})

export class pageRechercheEntrepriseComponent 
{
    filteredList:any[];
    Tnomentreprise:string[];
     entreprises: Entreprise[];
     
    annees: string;
    Recherche: string;
    TAnnees: String[];
    Tentreprise: string[];
    constructor(private elementRef: ElementRef,private http: Http, private router: Router)
    {
        this.filteredList=[];
       
        this.annees = "";
        this.Recherche = "";
        this.getEntreprise("", "");
        this.RemplirCombo();
        this.getListeNomEntreprise();
        
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
        this.filteredList = [];
    }

     //obtenir la liste des nom d entreprise pour le dropdown
     getListeNomEntreprise()
     {
         
      // this.PageAjouter = false;
       let url: string;
       url = "api/Etudiant/RemplirComboEntreprise";
       this.http.get(url).subscribe(donnees =>
          {
           this.Tnomentreprise = donnees.json() as string[];
          
          });
          
        
     }
    filter() {
        if (this.Recherche !== ""){
            this.filteredList = this.Tnomentreprise.filter(function(el:any){
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
         if(!inside){
             this.filteredList = [];
         }
     }
    

   
     
}