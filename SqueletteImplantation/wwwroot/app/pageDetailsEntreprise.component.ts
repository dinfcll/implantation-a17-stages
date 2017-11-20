import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {  Router, RouterModule, Routes, ActivatedRoute, ParamMap}   from '@angular/router';
import { Location }   from '@angular/common';
declare var jBox:any;
import { Entreprise } from './models/entreprise.class';


@Component({
  selector: 'detail-entreprise',
  templateUrl: `./../html/DetailEntreprise.html`,
  styleUrls:[`./../css/detail_entreprise_etudiant.css`],


})
export class PageDetailEntrepriseComponent  {
    entrepriseAjouter:Entreprise;
    ID: number;
    PageAjouter: boolean;

    
    constructor(private http: Http, private router: Router,private location: Location)
    {
        this.ID = this.DetectionPageID();
        if (this.ID != -1) {
            this.getEntrepriseParNoEnt(this.ID);
        }
        else
        {
            this.entrepriseAjouter = new Entreprise(-1,"","","","","","",0,0,0,0,0,"");
        }

    }
    
    getEntrepriseParNoEnt(NoEnt: number)
    {
      this.PageAjouter = false;
      let url: string;
      url = "api/Entreprise/"+NoEnt;
      this.http.get(url).subscribe(donnees =>
         {
          this.entrepriseAjouter = donnees.json() as Entreprise
         });
    
    }
    
    DetectionPageID (): number 
    {
        let CheminLong: string = this.router.url.toString();
        let Page: string[];
        let idStr:string;
        let id:number;
        Page = CheminLong.split('/');
        idStr=Page[Page.length-1]
        id = +idStr;
        if (id == -1) {
            this.PageAjouter = true;
        }
        return id;
    }

    Modifier(): void
    {
        if (!this.validation())
        {
            this.jBoxMessage("red", "Attention!!! Vous avez saisi un caractère non valide dans statistique de confirmation.");
        }
        else
        {          
            this.http.put("api/entreprise/Modifier", this.entrepriseAjouter).subscribe(donne =>
            {
                if (donne.status !== 200) {
                    this.jBoxMessage("red", "Erreur lors de la modification de l'entreprise.");
                }
                else
                {
                    this.jBoxMessage("green", "Modification effectuée avec succès!");
                }
                        
            });
        }  
    }


    Ajouter()
    {
        this.entrepriseAjouter.date = (new Date()).getFullYear().toString();
        if(!this.validation())
        {
            this.jBoxMessage("red", "Attention!!! Vous avez saisi un caractère non valide dans statistique de confirmation.");
        }
        else
           {
                this.http.post("api/Entreprise/Ajouter", this.entrepriseAjouter).subscribe(Result =>
                {
                    if (Result.status == 200) {
                        this.jBoxMessage("green", "Entreprise ajoutée!");
                    }
                    else
                    {
                        this.jBoxMessage("red", "Erreur lors de l'ajout de l'entreprise");
                    }
                });
            }
    }

    goBack(): void
    {
        this.location.back();
        
    }


    validation(): boolean
    {
       
        let tab: number[] = [
            this.entrepriseAjouter.nbreconfirmation,
            this.entrepriseAjouter.nbrenon,
            this.entrepriseAjouter.nbreoui,
            this.entrepriseAjouter.nbreprobablementnon,
            this.entrepriseAjouter.nbrpeutetre,
            Number(this.entrepriseAjouter.date)];
        let i: number = tab.length - 1;
        if (tab[5].toString().length != 4 || this.entrepriseAjouter.lieu === "" || this.entrepriseAjouter.notel === "" || this.entrepriseAjouter.personneresponsable === ""
            || this.entrepriseAjouter.poste === "" || this.entrepriseAjouter.nomentreprise === "")
            return false;

        while (i >= 0 && tab[i].toString()!="" && !isNaN(tab[i]))
        {
            i--;
        }

        if(i!=-1)
            return false;

        return true;
<<<<<<< HEAD
    }
//Messages d'erreurs/succès
      jBoxMessage(couleur: string, message: string) {

          new jBox('Notice', {
              content: message,
              color: couleur,
              autoClose: 5000
          });
      }
=======
  }

  jBoxMessage(couleur: string, message: string) {

      new jBox('Notice', {
          content: message,
          color: couleur,
          autoClose: 5000
      });
  }

>>>>>>> master

}
