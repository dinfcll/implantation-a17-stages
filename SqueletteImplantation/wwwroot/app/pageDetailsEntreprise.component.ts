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
    ErreurModifier: boolean;
    SuccesModifier: boolean;
    SuccesSupprimer: boolean;
    ErreurSupprimer: boolean;
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
    recu:boolean;
    
    constructor(private http: Http, private router: Router,
      private location: Location)
    {
        this.recu=false;
       // this.entreprise = new Entreprise(4,null,null,null,null,null,null,null,null,null,null);
        this.invalide=false;
        this.ID = this.DetectionPageID();
        if (this.ID != -1)
        {
            
            this.getEntrepriseParNoEnt(this.ID);
        }
        
           
        this.ErreurModifier = false;
        this.ErreurSupprimer = false;
        this.SuccesModifier = false;
        this.SuccesSupprimer = false;
        //this.PageAjouter = false;
        
    }
    
    getEntrepriseParNoEnt(NoEnt: number) {
      this.PageAjouter = false;
      let url: string;
      url = "api/Entreprise/"+NoEnt;
       this.http.get(url).subscribe(
           donnees => {
               this.entreprise = donnees.json() as Entreprise
           }
    );
    
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
    if (id == -1)
        this.PageAjouter = true;
    return id;
    }
    Modifier(): void
    {
        
                if( this.validation(this.Confirmation,this.Oui,
                    this.PeutEtre,this.ProbablementNon,
                    this.Non)===true)
                    {
                        this.invalide=true;
                        //return;
                    }
            
            else{
                this.invalide=false;
            }
            
           if(this.invalide===true)
            {
                new jBox('Notice', {
                    content: 'Attention!!! Vous avez saisi un carectère non valide dans statistique de confirmation.',
                    color: 'red',
                    autoClose: 5000
                    }); 
                return;
            }
            else{

                new jBox('Notice', {
                    content: 'Modification éffectuée',
                    color: 'yellow',
                    autoClose: 5000
                    }); 
       
        this.http.put("api/entreprise/Modifier", this. entreprise).subscribe(
            donne => {
                if (donne.status !== 200)
                    {
                     console.log(this.entreprise);
                    this.ErreurModifier = true;
                    }
                else
                    this.SuccesModifier = true;
            });

        }  
    }
    Supprimer(): void {

       /* new jBox('Confirm', {
            confirmButton: 'Do it!',
            cancelButton: 'Nope'
        });*/
        this.http.delete("api/entreprise/Supprimer/" + this.DetectionPageID()).subscribe(
            donne => {
                if (donne.status !== 200)
                    this.ErreurSupprimer = true;
                else
                    this.SuccesModifier = true;
            });
            new jBox('Notice', {
                content: 'Suppression réussie',
                color: 'yellow',
                autoClose: 5000
                }); 
    }
    Ajouter()
    {
      
              if(this.validation(this.nbreConfirmation,this.nbreOui,
                    this.nbrPeutEtre,this.nbreProbablementNon,
                    this.nbreNon) ===true)
                    {
                        this.invalide=true;
                        
                    }
            
            else{
                this.invalide=false;
            }
            
           if(this.invalide===true)
            {
                new jBox('Notice', {
                    content: 'Attention!!! Vous avez saisi un carectère non valide dans statistique de confirmation.',
                    color: 'red',
                    autoClose: 5000
                    }); 
                return;
            }
            else{
                new jBox('Notice', {
                    content: 'Entreprise ajoutée !!!',
                    color: 'yellow',
                    autoClose: 5000
                    }); 
      
      this. entrepriseAjouter=new Entreprise(9,this.nomEntreprise,this.date,
        this.lieu,this.personneResponsable,
        +this.nbreConfirmation, +this.nbreOui,
        +this.nbrPeutEtre, +this.nbreProbablementNon,
        +this.nbreNon,this.courrielRes);
        this.PageAjouter = true;
        this.http.post("api/Entreprise/Ajouter", this. entrepriseAjouter).subscribe(
            Result => {
                console.log(Result.status);
            }
        )

    }
    }
  goBack(): void {
    this.location.back();
  }

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

  
 



  }