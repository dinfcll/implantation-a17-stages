
import { Http } from '@angular/http';

import { Etudiant } from './models/etudiant.class';
import {AppService} from "./app.service";
import { Component } from '@angular/core';

import {  Router, RouterModule, Routes}   from '@angular/router';
declare var jBox:any;
@Component({
  templateUrl: `./../html/PageRechercheEtudiant.html`,
  styleUrls:[`./../css/accueil_enseignant.css`],
})
export class PageRechercheEtudiantComponent  {  
// PageModifier:boolean;
  etudiants: Etudiant[];
  selectedItems: any = [];
  annees: string;
  Recherche: string;
  TAnnees: String[];
  constructor(private service: AppService,private http: Http, private router: Router)
  {
    
    this.annees = "";
    this.Recherche = "";
     this.getEtudiant("","");
     /* this.Test2();
      this.Test3();*/
      this.RemplirComboAnneeEtudiant();
     // this.testModifier();
      
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

        selectEtudiant(etudiant : Etudiant, e : any) {
          
                  var index = this.selectedItems.indexOf(etudiant.noDa);
                  if (e.target.checked) {
                      if (index === -1) {
                          this.selectedItems.push(etudiant.noDa);
                      }
                  } else {
                      if (index !== -1) {
                          this.selectedItems.splice(index, 1);
                      }
                  }
                  console.log(this.selectedItems);
              }

              DeleteParNo(no : number): void {
                
                        this.http.delete("api/Etudiant/SupprimerEtudiant/" + no).subscribe(donne =>
                        {
                            if (donne.status !== 200)
                            {
                                this.jBoxMessage("red", "Erreur lors de la suppression de l'entreprise.")
                            }
                            else
                            this.jBoxMessage("green", "Supression effectuée avec succès!");
                        });
                    }


                    SupprimerEtudiantSelect(){

                         var i=0;
                         while(i < this.selectedItems.length){
                             this.DeleteParNo(this.selectedItems[i]);
                             i++;
                         }



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
    


//Messages d'erreurs/succès
jBoxMessage(couleur: string, message: string) {
    
          new jBox('Notice', {
              content: message,
              color: couleur,
              autoClose: 5000
          });
      }


/*testModifier():void
{
    this.service.currentPageModif.subscribe(pageModifier=>this.PageModifier=pageModifier);
    console.log(this.PageModifier)
}*/

PageModif():void
{
    this.service.changeFlag(true);
}
PageInfo():void
{
    this.service.changeFlag(false);
}



}