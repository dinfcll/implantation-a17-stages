import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {  Router, RouterModule, Routes, ActivatedRoute, ParamMap}   from '@angular/router';
import { Entreprise } from './models/entreprise.class';
import { Location }   from '@angular/common';




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
        if(this.validation2(this.nbreConfirmation,this.nbreOui,
            this.nbrPeutEtre,this.nbreProbablementNon,
            this.nbreNon) == true)
            {
                this.recu=false;
            }
            
              if(this.recu==true)
                {
                if( this.validation(this.Confirmation,this.Oui,
                        this.PeutEtre,this.ProbablementNon,
                        this.Non) == false)
                        {
                            return;
                        }
                    }
       
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
    Supprimer(): void {
        this.http.delete("api/entreprise/Supprimer/" + this.DetectionPageID()).subscribe(
            donne => {
                if (donne.status !== 200)
                    this.ErreurSupprimer = true;
                else
                    this.SuccesModifier = true;
            });
    }
    Ajouter()
    {
      
            /*    if(this.validation(this.nbreConfirmation,this.nbreOui,
                    this.nbrPeutEtre,this.nbreProbablementNon,
                    this.nbreNon) == false)
                    {
                        return;
                    }*/
      
      this. entrepriseAjouter=new Entreprise(6,this.nomEntreprise,this.date,
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
  goBack(): void {
    this.location.back();
  }

  validation(str1:string,str2:string,str3:string,str4:string,str5:string):boolean{
      let flag:boolean;
      flag=true;
     
      if(isNaN(+str1)==true ||
        isNaN(+str2)==true ||
      isNaN(+str3)==true ||
      isNaN(+str4)==true||
      isNaN(+str5)==true)
        {
          flag=false;
          this.invalide=true;
          this.recu=true;
        }

        return flag;
  }

  validation2(str1:string,str2:string,str3:string,str4:string,str5:string):boolean{
    let flag2:boolean;
    flag2=false;
   if( !str1 || !str2 || !str3 || !str4 || !str5)
      {
          flag2=true;
      }
     
      return flag2;
    }
  
  /*validationModif():boolean{
    let flag:boolean;
    flag=true;
    if(isNaN(+this.entreprise.NbreConfirmation)==true ||
        isNaN(+this.entreprise.NbreOui)==true ||
      isNaN(+this.entreprise.NbrPeutEtre)==true ||
      isNaN(+this.entreprise.NbreProbablementNon)==true||
      isNaN(+this.entreprise.NbreNon)==true)
      {
        flag=false;
      }

      return flag;

  }*/




  }