import { Component } from '@angular/core';
import { Enseignant } from './models/enseignant.class';
import { Etudiant } from './models/etudiant.class';
import {  Router }   from '@angular/router';
import { Http, Headers  } from '@angular/http';


declare var jBox:any;
@Component({
    selector: 'loginEnseignant',
    templateUrl: `./../html/indexConnexionEnseignantEtudiant.html`,
    styleUrls:[`./../css/style_page_accueil.css`],
})

export  class LoginEnseignantComponent { 

    private isValid: boolean;
    private enseignant: Enseignant;
    private etudiant: Etudiant;
    constructor(private http: Http,  private router: Router){ 
        this.isValid=true;
        
    }

    Connexion(courriel: string, mdp: string) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("api/Enseignant", JSON.stringify({courriel: courriel, motDePasse: mdp}), { headers: headers }).subscribe(
            Resultat=>
            {
                this.enseignant = Resultat.json() as Enseignant;
  
                if(Resultat.status == 200)
                    {
                         //naviguer plus loin
                         this.router.navigate(['/accueil-enseignant']);
                         
                         localStorage.setItem('var', JSON.stringify(this.enseignant));
                    }
                else
                    {
                        //message erreur
                        if(Resultat.status == 204)
                            {
                                this.isValid=false;
                                
                               
                                    this.jBoxMessage("red", "Mot de passe ou nom utilistateur invalide");
                                
                            }
                         
                    }
            })
    }




    ConnexionEtudiant(DAEtu:number, mdpEtu:string){
       if(!this.validation(DAEtu,  mdpEtu))
        {
            this.jBoxMessage("red", "Vérifier que tous les champs sont remplis ou vérifier votre numero de DA(7 chiffres)");
            return;
        }
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("api/Etudiant", JSON.stringify({noDa: DAEtu, motPasse: mdpEtu}), { headers: headers }).subscribe(
            Resultat=>
            {
                this.etudiant = Resultat.json() as Etudiant;
  
                if(Resultat.status == 200)
                    {
                         //naviguer plus loin
                         this.router.navigate(['/accueil-etudiant']);
                         
                         localStorage.setItem('currentUser', JSON.stringify(this.etudiant));
                    }
                else
                    {
                        //message erreur
                        if(Resultat.status == 204)
                            {
                                this.isValid=false;
                                
                                this.jBoxMessage("red", "Mot de passe ou numero de DA invalide");
                                
                            }
                         
                    }
            })
    }


    validation(DAEtu:number, mdpEtu:string): boolean
    {
       
        
       
        if (DAEtu.toString().length == 0  
            || isNaN(DAEtu) 
             || mdpEtu.length == 0 )
            {
            return false;
            }

            return true;
        }






        jBoxMessage(couleur: string, message: string) {
            
                  new jBox('Notice', {
                      content: message,
                      color: couleur,
                      autoClose: 5000
                  });
              }
    



    
    
   
 }

