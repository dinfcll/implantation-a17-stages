import { Component, Input } from '@angular/core';

import { Entreprise } from './models/entreprise.class';
import { Etudiant } from './models/etudiant.class';
import { Enseignant } from './models/enseignant.class';
import {  Router }   from '@angular/router';
import { Http, Headers } from '@angular/http';
import {AppService} from "./app.service";
import { Location }   from '@angular/common';
import {RelEnseignantEtudiant} from "./models/relenseignantetudiant.class";
import 'rxjs/add/operator/map'
declare var jBox:any;
@Component({
  selector: 'detail-etudiant',
  templateUrl: `./../html/Detailetudiant.html`,
  styleUrls:[`./../css/detail_entreprise_etudiant.css`],
    
  
  
})
export class PageDetailEtudiantComponent  { 
    etudiant:Etudiant;
    entreprise:Entreprise;
    entreprise2:Entreprise;
    enseignants: Enseignant[];
    enseignants2: Enseignant[];
    ID: number;
    PageAjouter:boolean;
    PageInfo:boolean;
    PageModifier:boolean;
    TabisChecked: boolean[];
    TabCheckedNomEns:any[];
                          
    selectedItems: any = [];
     TabRelEnsEtu:RelEnseignantEtudiant[]; 
     relEnsEtu:RelEnseignantEtudiant;
     selectedItemsAsupprimer: any = [];
     Tnomentreprise:string[];
   
    constructor(private location: Location ,private service: AppService, private http: Http,  private router: Router){
        this.PageAjouter=false;
        this.Tnomentreprise=[];
        this.enseignants=[];
         this.TabisChecked=[];
        this.TabCheckedNomEns=[];
        this.TabRelEnsEtu=[];
        this.testModifier(); 
                            
       
        this.etudiant = new Etudiant(-1,"","","","","","", "etudiant",null);
        this.entreprise = new Entreprise(-1,"","","","","","",0,0,0,0,0,"");
        this.entreprise2 = new Entreprise(null,"","","","","","",0,0,0,0,0,"");
        this.ID = this.DetectionPageID();
        this.getListeNomEntreprise();
        if (this.ID != -1) {
            this.getEtudiantParNoEnt(this.ID);
            this.getListeEnseignantParEtudiant(this.ID);
           
            this.TabCheckedNomEns=[];
        }
        else
        {
            this.etudiant = new Etudiant(-1,"","","","","","etudiant","",null);
            this.getListeEnseignant();
          
            
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
         this.getEntrepriseParNoEnt(this.etudiant.id);
          });
       
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
   
    getListeNomEntreprise()
    {
        
     
      let url: string;
      url = "api/Etudiant/RemplirComboEntreprise";
      this.http.get(url).subscribe(donnees =>
         {
          this.Tnomentreprise = donnees.json() as string[];
         
         });
         
       
    }
    
    getEntrepriseParNomEnt(NomEnt: string)
    {
        
      if(NomEnt !== ""){
      let url: string;
      url = "api/EntrepriseNomEnt/"+NomEnt;
      this.http.get(url).subscribe(donnees =>
         {
          this.entreprise2 = donnees.json() as Entreprise
          if(donnees.status==200)
            {
                if(this.PageModifier)
                    {
                        this.ModifEtudiant();
                    }else{
                        if(this.PageAjouter)
                            {
                               this.validationSiEtudiantExisteEtAjoutBD(this.etudiant.noDa);
                            }
                    }
                    
               
              
            }
         
         });
        }else{
            this.validationSiEtudiantExisteEtAjoutBD(this.etudiant.noDa);
        }
         
       
    }

    getListeEnseignantParEtudiant(noDa:number) {
        let url: string;
       
    
        this.http.get("api/EtudiantList/"+noDa).subscribe(
            donnees => {
                this.enseignants = donnees.json() as Enseignant[]
                console.log(this.enseignants);
                if(donnees.status == 200)
                    {
                        this.getListeEnseignant();
                    }
               
                
            }
        );
    
     }

     testModifier():void
     {
         this.service.currentPageModif.subscribe(pageModifier=>this.PageModifier=pageModifier);
         console.log(this.PageModifier)
     }


     
    getListeEnseignant() {
        let url: string;
       
    
        this.http.get("api/Enseignant/ListeEnseignant").subscribe(
            donnees => {
                this.enseignants2 = donnees.json() as Enseignant[]
              
               if(donnees.status==200)
                {      
                        this.selectedItemsAsupprimer=[];
                        this.remplirTabIsChecked();
                        this.createTabCheckedNomEnseignant();
                }
                console.log(this.enseignants2);
               
                
            }
        );
    
     }

  
     remplirTabIsChecked()
     {
        let i, j:number;
    
         for( i=0; i<this.enseignants2.length; i++)
            {
               this.TabisChecked.push(false);
            }

            for( i=0; i<this.enseignants2.length; i++)
                {
                    for( j=0; j<this.enseignants.length; j++)
                        {
                           if(this.enseignants[j].nom === this.enseignants2[i].nom)
                            {
                                this.TabisChecked[i]=true;
                            }
                        }
                }

     }
   
     createTabCheckedNomEnseignant()
     {
       
        for (var i = 0; i < this.enseignants2.length; i++) {
            this.TabCheckedNomEns.push({
                                 no: this.enseignants2[i].noEnseignant,
                                 nom: this.enseignants2[i].nom,
                                 isChecked: this.TabisChecked[i] 
                                });
                          
            if(this.TabisChecked[i])
                {
                    this.selectedItemsAsupprimer.push(this.enseignants2[i].noEnseignant);
                    this.selectedItems.push(this.enseignants2[i].noEnseignant);
                }
        }
     }

    

     selectEnseignant(noEns : number, e : any) {
        
                var index = this.selectedItems.indexOf(noEns);
                if (e.target.checked) {
                    if (index === -1) {
                        this.selectedItems.push(noEns);
                    }
                } else {
                    if (index !== -1) {
                        this.selectedItems.splice(index, 1);
                    }
                }
                console.log(this.selectedItems);
            }

 
 AddRelEnsEtuBD(){
    
                 
            for(var i=0; i<this.selectedItemsAsupprimer.length; i++)
                {
                    this.http.delete("api/relEnseignantEtudiant/SupprimerRelensetu/" + this.etudiant.noDa+"/"+ this.selectedItemsAsupprimer[i]).subscribe(Result =>
                         {
                             console.log(Result.status);
                        });
                }
                
     
                 this.SaveRelEnsEtuBD();

            }

      SaveRelEnsEtuBD(){
        var longueur=this.selectedItems.length;
        for(var i=0; i<longueur; i++){
        this.selectedItems.pop();  
    }  
          
          for(var i=0; i<this.selectedItems.length; i++)
            {
                this.relEnsEtu=new RelEnseignantEtudiant(this.etudiant.noDa, this.selectedItems[i])
                this.TabRelEnsEtu.push( this.relEnsEtu);
            }
      
      for(var i=0; i<this.TabRelEnsEtu.length; i++)
            {
                this.http.post("api/Enseignant/sauvegardeRelEnseignantEtudiantbd", this.TabRelEnsEtu[i]).subscribe(Result =>
                    {
                        console.log(Result.status);
                    });
            }
      }
           
     SaveModifEtudiant(){
        
        this.TabRelEnsEtu=[];
        

        this.AddRelEnsEtuBD(); 
        this.remplirTabselectedItemsAsupprimer();
        this.getEntrepriseParNomEnt(this.entreprise.nomentreprise);
       
} 

  ModifEtudiant(){
       
        this.etudiant.id=this.entreprise2.id;
       

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
     
     jBoxMessage(couleur: string, message: string) {
        
              new jBox('Notice', {
                  content: message,
                  color: couleur,
                  autoClose: 5000
              });
          }

         

          remplirTabselectedItemsAsupprimer(){
                    var longueur=this.selectedItemsAsupprimer.length;
                    for(var i=0; i<longueur; i++){
                    this.selectedItemsAsupprimer.pop();  
                }  
                    for(var i=0; i<this.selectedItems.length; i++){
                        this.selectedItemsAsupprimer.push(this.selectedItems[i]);
                    }

          }
       

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
                                    
                                    if(r.status == 204)
                                        {
                          
                                         this.etudiant.id=this.entreprise2.id;
                                        
                                       
                                        this.http.post("api/Etudiant/EnregistrementEtudiantbd", this.etudiant).subscribe(Result =>
                                            {
                                                if(Result.status == 200)
                                                  {
                                                      this.SaveRelEnsEtuBD();
                                                      this.jBoxMessage("green", "Etudiant ajoutée!");
                                                  }
                                            });




                                        }
                                    
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
                  this.PageAjouter=false;
                  this.PageModif();
                  this.location.back();
                 
                  
              }

              PageModif():void
              {
                  this.service.changeFlag(false);
              }
            





   

}


    




 