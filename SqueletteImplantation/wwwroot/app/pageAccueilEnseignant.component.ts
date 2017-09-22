
import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

import { Component } from '@angular/core';





@Component({
    selector: 'accueil_enseignant',

    templateUrl:`./../html/AccueilEnseignant.html`,
    styleUrls:[`./../css/accueil_enseignant.css`],
})

export class pageAccueilEnseignantComponent { 
    entreprises: Entreprise[];

    constructor(private http: Http){
  
        }
        getEntreprise(annee:string){
            
            this.http.get("api/Entreprise", JSON.stringify({annee})).subscribe(
                donnees => {this.entreprises = donnees.json() as Entreprise[]
                    
                    if(donnees != null)
                        {
                            console.log(donnees);
                        }
                    
                
                },
               
                
            
            
            );
        
        }
    
    
    
    
    
    }


