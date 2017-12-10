
import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Entreprise } from './models/entreprise.class';
import { Etudiant } from './models/etudiant.class';
import { Enseignant } from './models/enseignant.class';
import {  Router }   from '@angular/router';
import { Http, Headers } from '@angular/http';
import {AppService} from "./app.service";
import { Location }   from '@angular/common';

declare var jBox:any;
@Component({
  selector: 'detail-etudiant',
  templateUrl: `./../html/Detailetudiant.html`,
  styleUrls:[`./../css/detail_entreprise_etudiant.css`],
    
  
  
})
export class PageDetailEtudiantComponent implements AfterViewInit, OnInit  { 
  
    etudiant:Etudiant;
    entreprise:Entreprise;
    entreprise2:Entreprise;
    enseignant: Enseignant;
    enseignant2: Enseignant;
    Tnomenseignants: string[];
    ID: number;
    PageAjouter:boolean;
    PageInfo:boolean;
    PageModifier:boolean;
    MesssageCV:string;
    transmisCV:boolean;
  
     Tnomentreprise:string[];
     TidSelectionne:string[];
   
    constructor(private location: Location ,private service: AppService, private http: Http,  private router: Router){
        this.transmisCV=false;
        this.MesssageCV="";
        this.PageAjouter=false;
        this.Tnomentreprise=[];
        this.Tnomenseignants=[];
        this.enseignant=new Enseignant(-1,"", "", "", "", "");
        this.enseignant2=new Enseignant(-1,"", "", "", "", "");
     
        
                            
       
        this.etudiant = new Etudiant(-1,"","","","","","",null, "etudiant","",null);
        this.entreprise = new Entreprise(-1,"","","","","","",0,0,0,0,0,"");
        this.entreprise2 = new Entreprise(null,"","","","","","",0,0,0,0,0,"");
       
        
     
    }
    
    ngOnInit(){
        this.ID = this.DetectionPageID();
        this.testModifier(); 
        this. getListeNomEnseignant();
        this.getListeNomEntreprise();
        if (this.ID != -1) {
            this.getEtudiantParNoEnt(this.ID);
          
          
        }
        else
        {
            this.etudiant = new Etudiant(-1,"","","",(new Date()).getFullYear().toString(),"","",null,"etudiant","",null);
         
            
        }

    }
    ngAfterViewInit() {
        this.TidSelectionne=["inputCV", "listeens", "inputcompagnie", "inputProfil", "inputNoTel", "inputCourriel", "inputannee", "inputprenom", "inputnom"];
          if(this.PageAjouter===false && this.PageModifier===false){
                 for (var i = 0; i < this.TidSelectionne.length; i++)
                        {
                        
                           (<HTMLInputElement> document.getElementById(this.TidSelectionne[i])).disabled = true;
                          
                       } 
                       
                      
                          
         
              }
      }

     
     getEtudiantParNoEnt(NoDA: number)
     {
      
       let url: string;
       url = "api/EtudiantParNoDa/"+NoDA;
       this.http.get(url).subscribe(donnees =>
          {
           this.etudiant = donnees.json() as Etudiant;
           console.log(this.etudiant.id);
           if (this.etudiant.id!=null){
            this.getEntrepriseParNoEnt(this.etudiant.id);
           }
           if (this.etudiant.noEnseignant!=null){
            this.getEnseignantParNoEns(this.etudiant.noEnseignant);
          
           }

           if(this.etudiant.pathCV===null)
            {
                this.MesssageCV="Aucun CV transmis par cette étudiant";
            }
            else
                {
                    this.transmisCV=true;
                    this.MesssageCV="Un CV a été transmis par cette étudiant";
                }

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
        {
            this.PageAjouter = true;
            this.PageInfo=false;
        }
        return id;
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

    getEnseignantParNoEns(NoEns: number)
    {
        
     
      let url: string;
      url = "api/Enseignant/"+NoEns;
      this.http.get(url).subscribe(donnees =>
         {
          this.enseignant = donnees.json() as Enseignant
         
         });
         
       
    }
   
    getListeNomEntreprise()
    {
        
     
      let url: string;
      url = "api/Etudiant/RemplirComboEntreprise";
      this.http.get(url).subscribe(donnees =>
         {
          this.Tnomentreprise = donnees.json() as string[];
         
         });
         
       
    }

    getListeNomEnseignant()
    {
        
     
      let url: string;
      url = "api/Enseignant/RemplirComboEnseignant";
      this.http.get(url).subscribe(donnees =>
         {
          this.Tnomenseignants = donnees.json() as string[];
         
         });
         
       
    }
    
    getEnseignantParNomEns(NomEns: string)
    {
        let url: string;
        if(NomEns !== "")
        {
                        url = "api/EnseignantNomEns/" + NomEns;
                        this.http.get(url).subscribe(donnees => {
                        this.enseignant2 = donnees.json() as Enseignant
                        if(donnees.status==200)
                        {
                            this.etudiant.noEnseignant=this.enseignant2.noEnseignant;
                            if(this.PageModifier)
                            {
                               this.RequeteModif();

                            }
                            else
                            {
                                if(this.PageAjouter)
                                {
                                        this.etudiant.id=this.entreprise2.id;
                                        
                                        this.RequeteAjouter();
                                 }
                            }

                        }
                    
                    
                    })
    
      }
      else
      {
                if(this.PageModifier)
                {
                    if(this.entreprise.nomentreprise === "")
                        {
                            this.etudiant.id=null;
                        }
                        if(this.enseignant.nom === "")
                            {
                                this.etudiant.noEnseignant=null;
                            }
                    this.RequeteModif();

                }
                else
                {
                        if(this.PageAjouter)
                        {
                            if(this.entreprise.nomentreprise === "")
                                {
                                    this.etudiant.id=null;
                                }
                                if(this.enseignant.nom === "")
                                    {
                                        this.etudiant.noEnseignant=null;
                                    }
                                    this.RequeteAjouter();
                              
                         }
                }
      }










    }

     RequeteModif()
     {
        this.http.put("api/Etudiant/ModifierEtudiant", this.etudiant).subscribe(donne =>
            {
                    if (donne.status !== 200)
                    {
                        this.jBoxMessage("red", "Erreur lors de la modification de l'étudiant.");
                    }
                    else
                        this.jBoxMessage("green","Modification effectuée avec succès!");
            });
     }
     RequeteAjouter()
     {
         this.etudiant.pathCV=null;
        this.http.post("api/Etudiant/EnregistrementEtudiantbd", this.etudiant).subscribe(Result =>
            {
                if(Result.status == 200)
                  {
                
                      this.jBoxMessage("green", "Etudiant ajoutée!");
                  }
            });
     }





    getEntrepriseParNomEnt(NomEnt: string)
    {
        
        if (NomEnt !== "") {
            let url: string;
            url = "api/EntrepriseNomEnt/" + NomEnt;
            this.http.get(url).subscribe(donnees => {
                this.entreprise2 = donnees.json() as Entreprise
                if (donnees.status == 200) {
                    if (this.PageModifier) {
                        this.ModifEtudiant();
                    } else {
                        if (this.PageAjouter) {
                            this.validationSiEtudiantExisteEtAjoutBD(this.etudiant.noDa);
                        }
                    }

                }
            });
        }
        else
        {
            if (this.PageAjouter) {
                this.validationSiEtudiantExisteEtAjoutBD(this.etudiant.noDa);
            }
            else
                {
                    if(this.PageModifier)
                        {
                            this.ModifEtudiant();
                        }
                }
       
        }
         
       
    }

     testModifier():void
     {
         this.service.currentPageModif.subscribe(pageModifier=>this.PageModifier=pageModifier);
         console.log(this.PageModifier)
     }


    
  
           
     SaveModifEtudiant(){
        
    
        this.getEntrepriseParNomEnt(this.entreprise.nomentreprise);
       
} 

  ModifEtudiant(){
       
        this.etudiant.id=this.entreprise2.id;
        this.getEnseignantParNomEns(this.enseignant.nom);

      
  }
     
     jBoxMessage(couleur: string, message: string) {
        
              new jBox('Notice', {
                  content: message,
                  color: couleur,
                  autoClose: 5000
              });
          }

         

         
       /********************************************* */

          Ajouter()
          {
              
            this.validationChampSaisi();
            if(!this. validationChampSaisi())
                {
                    this.jBoxMessage("red", "Attention!!! vérifiez que tous les champs sont remplis \n\t ou vérifiez que vous avez saisi une année(4 chiffres) \n\t et un numéro de DA valide");
                    return;
                }
                else{
                   
                   this.getEntrepriseParNomEnt(this.entreprise.nomentreprise);
                }
             
           
          }

          validationSiEtudiantExisteEtAjoutBD(noDa:number)
          {
                       let retour:boolean =false;
                        var headers = new Headers();
                        headers.append('Content-Type', 'application/json');
                    
                            
                        this.http
                        .post("api/EtudiantConnecte", JSON.stringify({noDa: noDa}), { headers: headers })
                        .subscribe(r=>
                        {
                       
                            if(r.status == 200)
                                {
                                   
                                    this.jBoxMessage("red", "Attention!!! un étudiant existe déjà avec ce numéro de DA.");
                                    
                                }
                            
                            else
                                {
                                    this.getEnseignantParNomEns(this.enseignant.nom);
                                   
                                    
                                }
                                
                        })
                          
          }

          validationChampSaisi(): boolean
          {
             
              
             
              if (this.etudiant.noDa.toString().length == 0 || this.etudiant.nom === "" || 
                this.etudiant.prenom === "" || this.etudiant.addresseCourriel === ""
                  ||  this.etudiant.noTel === "" || this.etudiant.profil === "" ||
                  this.etudiant.annee ==="" || this.etudiant.annee.length != 4 || isNaN(this.etudiant.noDa)
                  || isNaN(+this.etudiant.annee))
                  {
                  return false;
                  }

                  return true;
              }




              goBack(): void
              {
                  this.transmisCV=false;
                  this.PageAjouter=false;
                  this.PageModif();
                  this.location.back();
                 
                  
              }

              PageModif():void
              {
                  this.service.changeFlag(false);
              }

              Pageinfo():void
              {
                  this.service.changeFlag(false);
              }

              SuppressionCVetudiant():void
              {
                this.http.put("api/Etudiant/SuppressionCVEtudiant", this.etudiant).subscribe(donne =>
                    {
                            if (donne.status == 200)
                            {
                                this.transmisCV=true;
                                this.MesssageCV="Aucun CV transmis par cette étudiant";
                                (<HTMLInputElement> document.getElementById("btnsupprimerCV")).disabled = true;
                                (<HTMLInputElement> document.getElementById("btntelecharge")).disabled = true;
                                this.jBoxMessage('green', "Suppression réussie du CV de "+this.etudiant.prenom+" "+this.etudiant.nom);
                               
                            }
                           
                    });
              }

            
            





   

}

