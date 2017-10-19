import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { RouterModule, Routes }   from '@angular/router';
import {  LoginEnseignantComponent }  from './loginenseignant.component';
import { PageRechercheEtudiantComponent } from "./pageRechercheEtudiant.component";

import { pageAccueilEnseignantComponent } from "./pageAccueilEnseignant.component";

import { PageDetailEntrepriseComponent } from "./pageDetailsEntreprise.component";

import { pageRechercheEntrepriseComponent } from "./pageRechercheEnreprise.component";

const appRoutes: Routes=[
  {
    path:'',
    component: LoginEnseignantComponent,
    pathMatch: 'full',
    //name: 'login';
    //useAsDefault:true
  },
  {
    path:'accueil-enseignant',
    component: pageAccueilEnseignantComponent,
    children: [ 
      {
          path: 'accueil-enseignant/recherche-etudiant',
          component: PageRechercheEtudiantComponent
      },
      {
        path: 'accueil-enseignant/recherche-entreprise', 
        component:  pageRechercheEntrepriseComponent
      },
      { 
        path: '', 
        redirectTo: 'accueil-enseignant/recherche-entreprise', 
        pathMatch: 'full'
       },]
  },
 /* {
     path: '**', 
     redirectTo: '',
     pathMatch: 'full',
  },*/
 {
    path: 'Login', 
    component: LoginEnseignantComponent 
  },
  
  /*{
    path: 'recherche-entreprise', 
    component:  pageAccueilEnseignantComponent
  },*/

  {
    path: 'detailEntreprise/:noEntreprise', 
    component:  PageDetailEntrepriseComponent
  },
 
  
]


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule,  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,
                   LoginEnseignantComponent,
                 
                  pageAccueilEnseignantComponent,
                  PageRechercheEtudiantComponent,
                  PageDetailEntrepriseComponent,
                  pageRechercheEntrepriseComponent ],
   
  bootstrap:    [ AppComponent ]
})



export class AppModule { }
