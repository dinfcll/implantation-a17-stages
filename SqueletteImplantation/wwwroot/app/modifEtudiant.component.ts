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
    styleUrls: [`./../css/accueiletudiant.css`],
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


      ModifierEtudiant()
      {
        if(!this. validationChampSaisi())
            {
                this.jBoxMessage("red", "Attention!!! vérifiez que tous les champs sont remplis correctement(le numéro de téléphone doit être des chiffres)");
                return;
            }
        this.http.put("api/Etudiant/ModifierEtudiant", this.etu).subscribe(donne =>
            {
             if (donne.status == 200)
                 {
                     this.jBoxMessage('green', "modification réussie");
                 }
                 else
                     this.jBoxMessage('red', "échec de la modification");
            });
      }
  
      jBoxMessage(couleur: string, message: string) {
        
              new jBox('Notice', {
                  content: message,
                  color: couleur,
                  autoClose: 5000
              });
          }


          validationChampSaisi(): boolean
          {
             
              
             
              if ( this.etu.nom === "" || 
                this.etu.prenom === "" || this.etu.addresseCourriel === ""
                  ||  this.etu.noTel === "" || this.etu.profil === ""  || isNaN(+this.etu.noTel)
                 )
                  {
                  return false;
                  }

                  return true;
              }


          Deconnexion() {
              localStorage.removeItem('currentUser');
              this.router.navigate(['/Login']);
          }


























    
}