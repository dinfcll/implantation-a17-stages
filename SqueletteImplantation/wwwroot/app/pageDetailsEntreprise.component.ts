import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {  Router, RouterModule, Routes, ActivatedRoute, ParamMap}   from '@angular/router';
import { Entreprise } from './models/entreprise.class';
import { Location }   from '@angular/common';




@Component({
  selector: 'detail-entreprise',
  templateUrl: `./../html/DetailEntreprise.html`,


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
    
    constructor(private http: Http, private router: Router,
      private location: Location)
    {
        //this.entreprise = null;
        this.entreprise = new Entreprise(null,null,null,null,null,null,null,null,null,null,null);
        this. entrepriseAjouter=this.entreprise;
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
        this.http.put("api/entreprise/Modifier", this.entreprise).subscribe(
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
        //this.entreprise =null;
        //this. entrepriseAjouter = new Entreprise(3,"aa","aa","aa","aa",0,0,0,0,0,"aa");
       // this.entreprise=this. entrepriseAjouter;
        this.PageAjouter = true;
        this.http.post("api/Entreprise/Ajouter", this. entreprise).subscribe(
            Result => {
                console.log(Result.status);
            }
        )


    }
  goBack(): void {
    this.location.back();
  }

  }