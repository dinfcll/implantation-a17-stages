
import { Http } from '@angular/http';

import { Etudiant } from './models/etudiant.class';

import { Component } from '@angular/core';

import {  Router, RouterModule, Routes}   from '@angular/router';

@Component({
  selector: 'recherche-etudiant',
  template: `page recherche etudiant`
})
export class PageRechercheEtudiantComponent  {  

  etudiant: Etudiant[];
  constructor(private http: Http, private router: Router)
  {
      //this.Test1();
      //this.Test2();
      this.Test3();
      
  }
//juste un test
  Test1() {
    this.http.get("api/Enseignant/Etudiant/annees").subscribe(
        donnees => {
            this.etudiant = donnees.json() as Etudiant[]
            console.log(this.etudiant);
        });

      }


      Test2() {
        let no:number;
        no=1212;
        this.http.get("api/Enseignant/"+no).subscribe(
            donnees => {
                this.etudiant = donnees.json() as Etudiant[]
                console.log(this.etudiant);
            });
    
          }


          Test3() {
            let no:number;
            no=1443434;
            this.http.get("api/Enseignant/Etudiant/"+no).subscribe(
                donnees => {
                    this.etudiant = donnees.json() as Etudiant[]
                    console.log(this.etudiant);
                });
        
              }
    












}