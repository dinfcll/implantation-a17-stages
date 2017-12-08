import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Enseignant } from './models/enseignant.class';

import { Etudiant } from './models/etudiant.class';


import {  Router, RouterModule, Routes}   from '@angular/router';




declare var jBox:any;
@Component({
    selector: 'modif_etudiant',

    templateUrl: `./../html/AccueilEtudiant.html`,
    
})

export class modifEtudiantComponent implements AfterViewInit, OnInit
{
    user:string;
    etu: Etudiant;
    TidSelectionne: string[];
    PageModifier:boolean;
    entreprise:Entreprise;
    enseignant:Enseignant;
    constructor(private http: Http, private router: Router)
    {
       this.PageModifier=true;///a gerer avec mon service
        this.TidSelectionne=[];
        this.enseignant=new Enseignant(-1,"", "", "", "", "");
        this.entreprise = new Entreprise(-1,"","","","","","",0,0,0,0,0,"");
    }

    ngOnInit(){
        this.user=localStorage.getItem('currentUser') ;
        this. etu = JSON.parse(this.user);
        console.log(this.etu);
        this.getEnseignantetEntrepriseParNoEnsNoEnt(this.etu.noEnseignant, this.etu.id);
       
    }
    ngAfterViewInit() {
        /*this.TidSelectionne=["noda", "nom", "prenom", "courriel", "motpasse", "courriel", "profil", "nomens", "noment", "notel"];
          if(this.PageModifier===false){
                 for (var i = 0; i < this.TidSelectionne.length; i++)
                        {
                        
                           (<HTMLInputElement> document.getElementById(this.TidSelectionne[i])).disabled = true;
                          
                       } 
                       
                      
                          
         
              }*/
      }




      getEnseignantetEntrepriseParNoEnsNoEnt(NoEns: number, NoEnt:number)
      {
          
       if(NoEns!==null)
          {
              let url: string;
              url = "api/Enseignant/"+NoEns;
              this.http.get(url).subscribe(donnees =>
                  {
                  this.enseignant = donnees.json() as Enseignant;
                  console.log(this.enseignant);
                  if(donnees.status == 200)
                  {
                      if(NoEnt != null)
                          {
                              this.getEntrepriseParNoEnt(NoEnt);
                              console.log(this.entreprise);
                          }
                      
                      }
              });
              
          }
           
         
      }

      getEntrepriseParNoEnt(NoEnt: number)
      {
        
        let url: string;
        url = "api/Entreprise/"+NoEnt;
        this.http.get(url).subscribe(donnees =>
           {
            this.entreprise = donnees.json() as Entreprise
           });
      
      }
  





























    
}