import { Http } from '@angular/http';
import { Entreprise } from './models/entreprise.class';
import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
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
    TAnnees: string[];
    constructor(private http: Http, private router: Router)
    {
        this.AnneeCourante = (new Date()).getFullYear().toString();
        this.AnneeRecherche = "";
        this.Recherche = "";
        this.RemplirCombo();
    }
    
    RemplirCombo() {
        this.http.get("api/Entreprise/RemplirCombo").subscribe(
            donnees => {
              
                if (donnees.status == 200) {
                    this.TAnnees = donnees.json() as string[]
                    this.getEntreprise(this.Recherche, this.AnneeRecherche);
                }
                else
                {
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
            this.http.get(url).subscribe(
                donnees => 
                {
                    if (donnees.status == 200) {
                        console.log(this.entreprises);
                        this.entreprises = donnees.json() as Entreprise[];
                    }
                    else
                    {
                        this.jBoxMessage("red", "Aucune occurence ne peux être affichée!");
                    }
                });
        }
        else
        {
            this.jBoxMessage("yellow", "Aucune entreprise dans la base de donnée");
            this.entreprises = null;
        }
    }
   
    Supprimer(ID:number)
    {
        this.http.delete("api/Entreprise/Supprimer/" + ID.toString()).subscribe(
            donnee => {
                if (donnee.status == 200)
                {
                    this.jBoxMessage("green", "Entreprise supprimée avec succès!");
                    this.RemplirCombo();
                }
                else
                {
                    this.jBoxMessage("red", "Erreur lors de la suppression de l'entreprise!");
                }
            });
    }

    AjouterAnnee(entreprise: Entreprise)
    {
        entreprise.date = this.AnneeCourante;
        this.http.post("api/Entreprise/Ajouter", entreprise).subscribe(Result => {
            if (Result.status == 200) {
                this.jBoxMessage("green", "Entreprise ajoutée à l'année courante!");
            }
            else
            {
                this.jBoxMessage("red", "Erreur lors de l'ajout de l'entreprise à l'année courante!");
            }
        });
    }

    jBoxMessage(couleur: string, message: string)
    {
        new jBox('Notice',
            {
                content: message,
                color: couleur,
                autoClose: 5000
        });
    }   
}