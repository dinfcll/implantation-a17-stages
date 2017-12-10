import { Http } from '@angular/http';



import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';



import { Etudiant } from './models/etudiant.class';


import {  Router, RouterModule, Routes}   from '@angular/router';

declare var jBox:any;


declare var jBox:any;
@Component({
    selector: 'mdp-etudiant',

    templateUrl: `./../html/mdpEtudiant.html`,
    styleUrls: [`./../css/mdp.css`],
    
})

export class mdpEtudiantComponent implements  OnInit
{
    user:string;
    etu: Etudiant;
    
    
    constructor(private http: Http, private router: Router)
    {
      
        
    }

    ngOnInit(){
        this.user=localStorage.getItem('currentUser') ;
        this. etu = JSON.parse(this.user);
        console.log(this.etu);
        
       
    }


    ChangerMdp(ancienMdp1:string, nouveauMdp1:string,nouveauMdp2:string){

        if(ancienMdp1==="" || nouveauMdp1==="" || nouveauMdp2==="")
            {
                this.jBoxMessage("red", "Veuillez remplir tous les champs svp!!!");
                return;
            }
            else{
        if(this.VerifAncienMdp(ancienMdp1)==false)
            {
                this.jBoxMessage("red", "Votre ancien mot de passe est incorrect");
                return;
            }
            else{
                if(this.VerifNouveauMdp(nouveauMdp1, nouveauMdp2)==false)
                    {
                        this.jBoxMessage("red", "vous devez saisir le même mot de passe aux champs (*) et (**)");
                        return;
                    }
                    else{
                         this.RequeteModif(nouveauMdp2);
                    }
                
            }
        }


    }

    VerifAncienMdp(ancMdp:string):boolean{
        let retour:boolean=false;
        if(ancMdp===this.etu.motPasse)
            {
                retour=true;
            }
        return retour;
    }

    VerifNouveauMdp(newMdp1:string, newMdp2:string):boolean{
        let retour:boolean=false;
        if(newMdp1===newMdp2)
            {
                retour=true;
            }
        return retour;
    }




    RequeteModif(nMdp:string)
    {
        this.etu.motPasse=nMdp;
       this.http.put("api/Etudiant/ModifierEtudiant", this.etu).subscribe(donne =>
           {
            if (donne.status == 200)
                {
                    this.jBoxMessage('green', "mot de passe modifié avec succès");
                }
                else
                    this.jBoxMessage('red', "Fichier non envoyé");
           });
    }

    jBoxMessage(couleur: string, message: string) {
        
              new jBox('Notice', {
                  content: message,
                  color: couleur,
                  autoClose: 5000
              });
          }

    
          Deconnexion() {
            localStorage.removeItem('currentUser');
            this.router.navigate(['/Login']);
        }














   





    }
