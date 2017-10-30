import { Component } from '@angular/core';

import {LoginEnseignantComponent} from './loginenseignant.component';

import { Enseignant } from './models/enseignant.class';
import {  Router }   from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'profil-enseignant',
  template: `page profil enseignant allo
     {{user.noEnseignant}}
     <br/>
     {{user.nomUtil}}
     <br/>
     {{user.nom}}
     <br/>
     {{user.prenom}}
     <br/>
     {{user.courriel}}
     <br/>
     {{user.motDePasse}}
  
  `
})
export class ProfilEnseignantComponent  { 
    private ens: Enseignant;
    user:any;
    constructor(private http: Http,  private router: Router){
        // set token if saved in local storage
        //this.ens=new LoginEnseignantComponent(http, router).getEnseignantConnecte();
        this.user=localStorage.getItem('var');
    }
    

 }