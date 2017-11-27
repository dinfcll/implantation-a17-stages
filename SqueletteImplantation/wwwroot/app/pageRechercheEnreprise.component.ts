import { Component,ElementRef} from '@angular/core';
import { Http } from '@angular/http';
import { Router, RouterModule, Routes } from '@angular/router';

import { Entreprise } from './models/entreprise.class';

declare var jBox: any;

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
    entreprises: Entreprise[];
    AnneeRecherche: string;
    AnneeCourante: string;
    Recherche: string;
    filteredList:any[];
    Tnomentreprise:string[];
    TAnnees: string[];
    annees: string;
    Tentreprise: string[];
    constructor(private elementRef: ElementRef,private http: Http, private router: Router) {
        this.Tnomentreprise=[];
        this.entreprises=[];
        this.TAnnees=[];
        this.AnneeCourante = (new Date()).getFullYear().toString();
        this.AnneeRecherche = ""; 
        this.filteredList=[];
        this.Recherche = "";
        this.getEntreprise("","");
        this.RemplirCombo();
        this.getListeNomEntreprise();
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
        
    getEntreprise(Recherche: string, annees: string) {
        let url: string;
        this.Recherche = Recherche;
        this.AnneeRecherche = annees;
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
        if (this.TAnnees.length != 0) {
            this.http.get(url).subscribe(donnees => {
                    if (donnees.status == 200) {
                        this.entreprises = donnees.json() as Entreprise[];
                    } else {
                        this.jBoxMessage("red", "Aucune occurence ne peux être affichée!");
                    }
            });
        } else {
            this.jBoxMessage("yellow", "Aucune entreprise dans la base de donnée");
            this.entreprises = null;
        }
    }
   
    Supprimer(ID:number,Nom:string) {
        var r = confirm("Voulez-vous supprimer l'entreprise "+Nom.toString());
    if (r == true) {
        this.http.delete("api/Entreprise/Supprimer/" + ID.toString()).subscribe( donnee => {
                if (donnee.status == 200) {
                    this.jBoxMessage("green", "Entreprise supprimée avec succès!");
                    this.RemplirCombo();
                }
                else {
                    this.jBoxMessage("red", "Erreur lors de la suppression de l'entreprise!");
                }
            });
    }}

    AjouterAnnee(entreprise: Entreprise)
    {
        entreprise.date = this.AnneeCourante;
        this.http.post("api/Entreprise/Ajouter", entreprise).subscribe(Result => {
            if (Result.status == 200) {
                this.jBoxMessage("green", "Entreprise ajoutée à l'année courante!");
            } else {
                this.jBoxMessage("red", "Erreur lors de l'ajout de l'entreprise à l'année courante!");
            }
        });
    }

    jBoxMessage(couleur: string, message: string) {
        new jBox('Notice',
            {
                content: message,
                color: couleur,
                autoClose: 5000
            });
    }   

    getListeNomEntreprise() {
        let url: string;
        url = "api/Etudiant/RemplirComboEntreprise";
        this.http.get(url).subscribe(donnees => {
            this.Tnomentreprise = donnees.json() as string[];
            });
    }

    filter() {
        if (this.Recherche !== "") {
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
         if(!inside) {
             this.filteredList = [];
         }
     }
}

     

   
     