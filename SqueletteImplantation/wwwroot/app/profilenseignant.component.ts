import { Component } from '@angular/core';

import {LoginEnseignantComponent} from './loginenseignant.component';

import { Enseignant } from './models/enseignant.class';
import {  Router }   from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'profil-enseignant',
  template: `page profil enseignant allo
     {{ens.noEnseignant}}
     <br/>
     {{ens.nomUtil}}
     <br/>
     {{ens.prenom}}
     <br/>
     {{ens.courriel}}
     <br/>
     {{ens.motDePasse}}
    
  
  `
})
export class ProfilEnseignantComponent  { 
    ens: any;
    user:string;
    constructor(private http: Http,  private router: Router){
        
        this.user=localStorage.getItem('var') ;
        this. ens = JSON.parse(this.user);
        console.log(this.ens);
    }
    

 }