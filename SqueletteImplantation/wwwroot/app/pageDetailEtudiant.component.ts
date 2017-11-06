import { Component } from '@angular/core';

import { Entreprise } from './models/entreprise.class';
import { Etudiant } from './models/etudiant.class';
import { Enseignant } from './models/enseignant.class';
import {  Router }   from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'detail-etudiant',
  templateUrl: `./../html/Detailetudiant.html`,
  styleUrls:[`./../css/detail_etudiant.css`],
    
  
  
})
export class PageDetailEtudiantComponent  { 
    etudiant:Etudiant;
    entreprise:Entreprise;
    enseignants: Enseignant[];
    ID: number;
    PageAjouter: boolean;
    PageModifier:boolean;
    constructor(private http: Http,  private router: Router){
        this.PageModifier=false;
        this.etudiant = new Etudiant(-1,"","","","","",0);
        this.entreprise = new Entreprise(-1,"","","","","","",0,0,0,0,0,"");
        this.ID = this.DetectionPageID();
        if (this.ID != -1) {
            this.getEtudiantParNoEnt(this.ID);
            this.getListeEnseignantParEtudiant(this.ID);
        }
        else
        {
            this.etudiant = new Etudiant(-1,"","","","","",0);
        }
        
    }

     //Récupère l'etudiant choisie par le NoDA
     getEtudiantParNoEnt(NoDA: number)
     {
       this.PageAjouter = false;
       let url: string;
       url = "api/EtudiantParNoDa/"+NoDA;
       this.http.get(url).subscribe(donnees =>
          {
           this.etudiant = donnees.json() as Etudiant;
          console.log(this.etudiant.id);
         this.getEntrepriseParNoEnt(this.etudiant.id);
          });
       
     }




    //Récupère l'ID de l'etudiant choisie
    DetectionPageID (): number 
    {
        let CheminLong: string = this.router.url.toString();
        let Page: string[];
        let idStr:string;
        let id:number;
        Page = CheminLong.split('/');
        idStr=Page[Page.length-1]
        id = +idStr;
       /* if (id == -1)
            this.PageAjouter = true;*/
        return id;
    }
//obtenir l'entreprise en fonction de l'id
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
//Obtenir la liste des enseignants en charge d'un étudiant
    getListeEnseignantParEtudiant(noDa:number) {
        let url: string;
       
    
        this.http.get("api/EtudiantList/"+noDa).subscribe(
            donnees => {
                this.enseignants = donnees.json() as Enseignant[]
                console.log(this.enseignants);
               
                
            }
        );
    
     }

//Modifier un étudiant
Modifier()
{
    this.PageModifier=true;
}




    

 }