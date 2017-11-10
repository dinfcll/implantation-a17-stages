import { Component, Input } from '@angular/core';

import { Entreprise } from './models/entreprise.class';
import { Etudiant } from './models/etudiant.class';
import { Enseignant } from './models/enseignant.class';
import {  Router }   from '@angular/router';
import { Http } from '@angular/http';
import {AppService} from "./app.service";
import {RelEnseignantEtudiant} from "./models/relenseignantetudiant.class";
declare var jBox:any;
@Component({
  selector: 'detail-etudiant',
  templateUrl: `./../html/Detailetudiant.html`,
  styleUrls:[`./../css/detail_etudiant.css`],
    
  
  
})
export class PageDetailEtudiantComponent  { 
    etudiant:Etudiant;
    entreprise:Entreprise;
    entreprise2:Entreprise;
    enseignants: Enseignant[];
    enseignants2: Enseignant[];
    ID: number;
   
    PageModifier:boolean;
    TabisChecked: boolean[];
    TabCheckedNomEns:any[];
    selectedItems: any = [];
     TabRelEnsEtu:RelEnseignantEtudiant[]; 
     relEnsEtu:RelEnseignantEtudiant;
    
    
   
    constructor(private service: AppService, private http: Http,  private router: Router){
        
        this.enseignants=[];
      
        this.TabCheckedNomEns=[];
        this.testModifier();
       
        this.etudiant = new Etudiant(-1,"","","","","",0);
        this.entreprise = new Entreprise(-1,"","","","","","",0,0,0,0,0,"");
        this.entreprise2 = new Entreprise(-1,"","","","","","",0,0,0,0,0,"");
        this.ID = this.DetectionPageID();
        if (this.ID != -1) {
            this.getEtudiantParNoEnt(this.ID);
            this.getListeEnseignantParEtudiant(this.ID);
            this.getListeEnseignant();
         
        }
        else
        {
            this.etudiant = new Etudiant(-1,"","","","","",0);
        }
        
    }

     //Récupère l'etudiant choisie par le NoDA
     getEtudiantParNoEnt(NoDA: number)
     {
      // this.PageAjouter = false;
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
        
     // this.PageAjouter = false;
      let url: string;
      url = "api/Entreprise/"+NoEnt;
      this.http.get(url).subscribe(donnees =>
         {
          this.entreprise = donnees.json() as Entreprise
         
         });
         
       
    }
    //obtenir l'entreprise en fonction de son nom
    getEntrepriseParNomEnt(NomEnt: string)
    {
        
      
      let url: string;
      url = "api/EntrepriseNomEnt/"+NomEnt;
      this.http.get(url).subscribe(donnees =>
         {
          this.entreprise2 = donnees.json() as Entreprise
         
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

     testModifier():void
     {
         this.service.currentPageModif.subscribe(pageModifier=>this.PageModifier=pageModifier);
         console.log(this.PageModifier)
     }


     //Obtenir la liste des enseignants 
    getListeEnseignant() {
        let url: string;
       
    
        this.http.get("api/Enseignant/ListeEnseignant").subscribe(
            donnees => {
                this.enseignants2 = donnees.json() as Enseignant[]
               // this.Tab=this.enseignants2;
               if(this.enseignants2.length != 0)
                {
                        this.remplirTabIsChecked();
                        this.createTabCheckedNomEnseignant();
                }
                console.log(this.enseignants2);
               
                
            }
        );
    
     }

   //cocher tous les enseignants qui suit l'étudiant
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
        }
     }
/********************************************************************************************************* */
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

   

}


    




 