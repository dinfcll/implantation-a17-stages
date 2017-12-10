import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Enseignant } from './models/enseignant.class';



import {  Router, RouterModule, Routes}   from '@angular/router';




declare var jBox:any;
@Component({
    selector: 'accueil_enseignant',

    templateUrl: `./../html/AccueilEtudiant.html`,
    styleUrls: [`./../css/accueiletudiant.css`],
})

export class pageAccueilEtudiantComponent implements AfterViewInit, OnInit
{
    etu: any;
    user:string;
    recu:boolean;
   file: File;
   formData: FormData;
   Message:string;
   enseignant:Enseignant;
   entreprise:Entreprise;
   TidSelectionne: string[];
   Tidentreprise:string[];
   PageModifier:boolean;

    
    constructor(private http: Http, private router: Router)
    {
        this.recu=false;
        this.PageModifier=false;
        this.TidSelectionne=[];
        this.Tidentreprise=[];
        this.Message="";
        this.enseignant=new Enseignant(-1,"", "", "", "", "");
        this.entreprise = new Entreprise(-1,"","","","","","",0,0,0,0,0,"");
        
       
        
    }


    ngOnInit(){
        this.user=localStorage.getItem('currentUser') ;
        this. etu = JSON.parse(this.user);
        console.log(this.etu);
      //  this.getEnseignantetEntrepriseParNoEnsNoEnt(this.etu.noEnseignant, this.etu.id);
        
     }
    ngAfterViewInit() {
        this.TidSelectionne=[ "nom", "prenom", "courriel", "profil", "nomens", "notel"];
        this.Tidentreprise=[  "entnom", "entadd", "entcourriel", "entpers", "entnotel"];
          if(this.PageModifier===false){
                 for (var i = 0; i < this.TidSelectionne.length; i++)
                        {
                        
                           (<HTMLInputElement> document.getElementById(this.TidSelectionne[i])).disabled = true;
                          
                       } 
                    }

                    this.getEnseignantetEntrepriseParNoEnsNoEnt(this.etu.noEnseignant, this.etu.id);

                   







                }

            
    

    Deconnexion() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/Login']);
    }

    public fileChange(event:any)
    {
            let fileList: FileList = event.target.files;
            
            if(fileList.length > 0)
            {
                this.file = fileList[0];
                this.formData = new FormData();
                this.formData.append('cv', this.file);
                this.Message = this.file.name;
                //this.etu.pathCV="/app/CV/"+this.Message;
                console.log(this.Message);
            }
    }
 
    public televerserCV()
    {
            this.etu.pathCV="/app/CV/"+this.Message;
            this.http.post("api/ajoutfichier" , this.formData).subscribe(reponse => this.FichierValide(reponse));
        
    }

    public FichierValide(retour :any) 
    {
        if(retour.status === 200)
        {
            if(retour._body != null)
            {
               
                console.log("Fichier envoyé avec succès !");
                //this.RequeteInsertPATHCV();
                this.RequeteModif();
               // this.jBoxMessage('green', "Fichier envoyé avec succès");
    
            }

        }
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
                            this.recu=true;
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
          if(donnees.status==200){
            if(this.PageModifier===false && this.recu===true){
                for (var i = 0; i < this.Tidentreprise.length; i++)
                       {
                       
                          (<HTMLInputElement> document.getElementById(this.Tidentreprise[i])).disabled = true;
                         
                      } 
                   }
          }
          
         });
    
    }



    RequeteInsertPATHCV()
    {
        if(this.Message=="")
         {
            this.jBoxMessage('red', "S' il vous plait, veuillez choisir un fichier!!!");
            return;
         }


       this.http.put("api/Etudiant/SuppressionCVEtudiant", this.etu).subscribe(donne =>
           {
                   if (donne.status == 200)
                   {
                       console.log(this.etu);
                       this.televerserCV();
                      
                   }
                  
           });
    }

    RequeteModif()
    {
       this.http.put("api/Etudiant/ModifierEtudiant", this.etu).subscribe(donne =>
           {
            if (donne.status == 200)
                {
                    this.jBoxMessage('green', "Fichier envoyé avec succès");
                }
                else
                    this.jBoxMessage('green', "Fichier non envoyé");
           });
    }






    jBoxMessage(couleur: string, message: string) {
        
              new jBox('Notice', {
                  content: message,
                  color: couleur,
                  autoClose: 5000
              });
          }


       
    

         






   

    

     
}

