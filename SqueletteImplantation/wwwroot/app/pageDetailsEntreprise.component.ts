import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {  Router, RouterModule, Routes, ActivatedRoute, ParamMap}   from '@angular/router';
import { Location }   from '@angular/common';
declare var jBox: any;
import { Enseignant} from './models/enseignant.class';
import { Entreprise } from './models/entreprise.class';
import { AppService} from './app.service';

@Component({
  selector: 'detail-entreprise',
  templateUrl: `./../html/DetailEntreprise.html`,
  styleUrls:[`./../css/detail_entreprise_etudiant.css`],


})
export class PageDetailEntrepriseComponent  {
    entrepriseAjouter:Entreprise;
    PageAjouter: boolean;
    PageDetail: boolean;
    TEnseignant: Enseignant[];
    constructor(private http: Http, private router: Router, private location: Location, private appservice: AppService)
    {
        let CheminLong: string = this.router.url.toString();
        let Page: string[];
        let idStr: string;
        let id: number;
        this.PageAjouter = false;
        this.RecupererFlag();
        Page = CheminLong.split('/');
        id = +Page[Page.length - 1];
        if (id == -1) {
            this.entrepriseAjouter = new Entreprise(-1, "", "", "", "", "", "", 0, 0, 0, 0, 0, "");
            this.PageAjouter = true;
        } else {
            this.getEntrepriseParNoEnt(id);
        }
    }

    getEntrepriseParNoEnt(ID:number)
    {
      this.PageAjouter = false;
      let url: string;
      url = "api/Entreprise/" + ID;
      this.http.get(url).subscribe(donnees => {
          this.entrepriseAjouter = donnees.json() as Entreprise
          if (this.PageDetail) {
              this.RechercherEnseignantEntreprise();
          }
      });
    
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
        this.appservice.changeFlag(false);
    }


    validation(): boolean {
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

        while (i >= 0 && tab[i].toString() != "" && !isNaN(tab[i])) {
            i--;
        }

        if (i != -1)
            return false;

        return true;
    }

  jBoxMessage(couleur: string, message: string) {

      new jBox('Notice', {
          content: message,
          color: couleur,
          autoClose: 5000
      });
    }
  RecupererFlag():void {
      this.appservice.currentPageModif.subscribe(pageDetail => this.PageDetail = pageDetail);
  }

  RechercherEnseignantEntreprise()
  {
      console.log('Bonjour!');
      this.http.get('api/Entreprise/EnseignantID/' + this.entrepriseAjouter.id.toString()).subscribe(Resultat => {
          if (Resultat.status != 200) {
              this.jBoxMessage("red", "Erreur lors de la recherche des enseignants en relation avec l'entreprise");
          } else {
              this.TEnseignant = Resultat.json() as Enseignant[];
              console.log("HELLO");
          }
      });
  }
}
