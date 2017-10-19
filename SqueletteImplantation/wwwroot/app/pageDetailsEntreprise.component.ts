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
    
   UnEntrepriseID: Entreprise; 
    constructor(private http: Http, private router: Router,
      private location: Location)
    {
       this.getEntrepriseParNoEnt(this.DetectionPageID())
    }
    
    getEntrepriseParNoEnt(NoEnt: number) {
      let url: string;
      url = "api/Entreprise/"+NoEnt;
       this.http.get(url).subscribe(
        donnees => {
            this.UnEntrepriseID = donnees.json() as Entreprise
            
            
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
    id= +idStr;
    
    return id;
  }
    
  goBack(): void {
    this.location.back();
  }










  }