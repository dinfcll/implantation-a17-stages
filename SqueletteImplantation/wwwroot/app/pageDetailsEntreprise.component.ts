import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {  Router, RouterModule, Routes, ActivatedRoute, ParamMap}   from '@angular/router';
import { Entreprise } from './models/entreprise.class';
import { Location }   from '@angular/common';
declare var jBox:any;



@Component({
  selector: 'detail-entreprise',
  templateUrl: `./../html/DetailEntreprise.html`,
  styleUrls:[`./../css/detail_entreprise.css`],


})
export class PageDetailEntrepriseComponent  {
    entrepriseAjouter:Entreprise;
    entreprise: Entreprise;
    ID: number;
    PageAjouter: boolean;
    Alert: boolean;
   /**************************** */
    nomEntreprise:string;
    date:string;
    lieu:string;
    personneResponsable:string;
    noTel:string;
    poste:string;
    courrielRes:string;
    nbreConfirmation:string;
    nbreOui:string;
    nbrPeutEtre:string;
    nbreProbablementNon:string;
    nbreNon:string;
    /**************************** */
    Confirmation:string;
    Oui:string;
    PeutEtre:string;
    ProbablementNon:string;
    Non:string;
    /**************************** */
    invalide:boolean;
    
    constructor(private http: Http, private router: Router,
      private location: Location)
    {
        this.invalide=false;
        this.ID = this.DetectionPageID();
        if (this.ID != -1)
        {
            
            this.getEntrepriseParNoEnt(this.ID);
        }       
    }
    //Récupère l'entreprise choisie par l'ID
    getEntrepriseParNoEnt(NoEnt: number)
    {
      this.PageAjouter = false;
      let url: string;
      url = "api/Entreprise/"+NoEnt;
      this.http.get(url).subscribe(donnees =>
         {
            this.entreprise = donnees.json() as Entreprise
         });
    
    }
    //Récupère l'ID de l'entreprise choisie
    DetectionPageID (): number 
    {
        let CheminLong: string = this.router.url.toString();
        let Page: string[];
        let idStr:string;
        let id:number;
        Page = CheminLong.split('/');
        idStr=Page[Page.length-1]
        id = +idStr;
        if (id == -1)
            this.PageAjouter = true;
        return id;
    }

    Modifier(): void
    {
        
        if( this.validation(this.Confirmation,this.Oui,this.PeutEtre,this.ProbablementNon,this.Non)===true){
           this.invalide=true;
        }
        else
            {
                this.invalide=false;
            }

        if(this.invalide===true)
        {
            this.jBoxMessage("red", "Attention!!! Vous avez saisi un caractère non valide dans statistique de confirmation.");
            return;
        }
        else
        {
            this.jBoxMessage("green", "Modification effectuée");           
                this.http.put("api/entreprise/Modifier", this. entreprise).subscribe(donne =>
                {
                        if (donne.status !== 200)
                        {
                            this.jBoxMessage("red", "Erreur lors de la modification de l'entreprise.");
                        }
                        else
                            this.jBoxMessage("green","Modification effectuée avec succès!");
                });
            }  
    }

    Supprimer(): void {

        this.http.delete("api/entreprise/Supprimer/" + this.DetectionPageID()).subscribe(donne =>
        {
            if (donne.status !== 200)
                this.jBoxMessage("green","Supression effectuée avec succès!");
            else
                this.jBoxMessage("red","Erreur lors de la suppression de l'entreprise.")
        });
    }

    Ajouter()
    {
      
        if(this.validation(this.nbreConfirmation,this.nbreOui,this.nbrPeutEtre,this.nbreProbablementNon,this.nbreNon) ===true)
        {
           this.invalide=true;           
        }
        else
            {
               this.invalide=false;
            }
            
        if(this.invalide===true)
        {
            this.jBoxMessage("red", "Attention!!! Vous avez saisi un caractère non valide dans statistique de confirmation.");
        }
        else
            {
                
                this. entrepriseAjouter=new Entreprise(9,this.nomEntreprise,this.date,
                this.lieu,this.personneResponsable,
                +this.nbreConfirmation, +this.nbreOui,
                +this.nbrPeutEtre, +this.nbreProbablementNon,
                +this.nbreNon,this.courrielRes);
                this.PageAjouter = true;
                this.http.post("api/Entreprise/Ajouter", this.entrepriseAjouter).subscribe(Result =>
                {
                    this.jBoxMessage("green", "Entreprise ajoutée!");
                });
            }
    }

    goBack(): void
    {
        this.location.back();
    }
//Valide si chaque champ est valide
  validation(str1:string,str2:string,str3:string,str4:string,str5:string):boolean{
      let flag:boolean;
      flag=true;
      let tab : string[]=[str1, str2, str3, str4, str5];
    
           let a:boolean;
           a=isNaN(+tab[0]);
           console.log(a);
            let i:number=0;
            while(i<tab.length && (tab[i]===undefined || (a=isNaN(+tab[i])) !== true))
                {
                    i++;
                    flag=false;
                }
                if(i<tab.length)
                    {
                        flag=true;
                    }
        return flag;
  }
//Messages d'erreurs / succès
  jBoxMessage(couleur: string, message: string) {

      new jBox('Notice', {
          content: message,
          color: couleur,
          autoClose: 5000
      });
  }


}
