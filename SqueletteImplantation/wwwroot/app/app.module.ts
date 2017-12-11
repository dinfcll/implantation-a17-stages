import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginEnseignantComponent }  from './loginenseignant.component';
import { PageRechercheEtudiantComponent } from "./pageRechercheEtudiant.component";
import { pageAccueilEnseignantComponent } from "./pageAccueilEnseignant.component";
import { PageDetailEntrepriseComponent } from "./pageDetailsEntreprise.component";
import { GestionEnseignant } from "./pageGestionEnseignant.component"
import { pageRechercheEntrepriseComponent } from "./pageRechercheEnreprise.component";
import { ProfilEnseignantComponent } from "./profilenseignant.component";
import {mdpEtudiantComponent} from "./mdpEtudiant.component";
import { pageAccueilEtudiantComponent } from "./pageAccueilEtudiant.component";
import {PageAjouterEnseignant} from "./pageAjouterEnseignant.component"
import {modifEtudiantComponent} from "./modifEtudiant.component";
import {PageDetailEtudiantComponent} from "./pageDetailEtudiant.component";
import {AppService} from "./app.service";
import {AuthguardGuard} from "./authguard.guard";
import {AuthguardGuardens} from "./authguard.guardens"



const appRoutes: Routes=[
  {
    path:'',
    component: LoginEnseignantComponent,
    pathMatch: 'full',
  },
  {
    path:'accueil-enseignant',
    component: pageAccueilEnseignantComponent,
    canActivate: [ AuthguardGuardens ],
    canActivateChild:[AuthguardGuardens],
    children: [ 
      {
          path: 'recherche-etudiant',
          component: PageRechercheEtudiantComponent
      },
      {
        path: 'recherche-entreprise', 
        component:  pageRechercheEntrepriseComponent
      },
      { 
        path: '', 
        redirectTo: 'recherche-entreprise', 
        pathMatch: 'full'
       },]
  },
 {
    path: 'Login', 
    component: LoginEnseignantComponent 
  },
  {
    path: 'profil-enseignant',
    canActivate: [ AuthguardGuardens ],
    component:  ProfilEnseignantComponent
},
  {
    path: 'detailEntreprise/:id', 
    canActivate: [ AuthguardGuardens ],
    component:  PageDetailEntrepriseComponent
  },
    {
        path: 'detailEtudiant/:noDa', 
        canActivate: [ AuthguardGuard ],
        component:  PageDetailEtudiantComponent
    },
    {
        path: 'gestionenseignant',
        canActivate: [ AuthguardGuardens ],
        component: GestionEnseignant
    },
    {
        path: 'AjouterEnseignant',
       canActivate: [AuthguardGuardens ],
        component: PageAjouterEnseignant
    },
     {
      path: 'accueil-etudiant', 
      canActivate: [ AuthguardGuard ], 
      component:  pageAccueilEtudiantComponent,
     
    },
    {
      path: 'profil-etudiant', 
      canActivate: [ AuthguardGuard ],
      component:  modifEtudiantComponent
    },
    {
      path: 'changer-Mdpetudiant', 
      canActivate: [ AuthguardGuard ],
      component:  mdpEtudiantComponent
    },
    
   
    
   
 
  
]



@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule,  RouterModule.forRoot(appRoutes) ],
  

  declarations: [ AppComponent,
    LoginEnseignantComponent,
    pageAccueilEnseignantComponent,
    PageDetailEntrepriseComponent,
    PageRechercheEtudiantComponent, 
    pageRechercheEntrepriseComponent,
    ProfilEnseignantComponent,
    PageDetailEtudiantComponent,
    GestionEnseignant,
    PageAjouterEnseignant,
    pageAccueilEtudiantComponent,
    modifEtudiantComponent,
    mdpEtudiantComponent],






  bootstrap: [ AppComponent],
  providers: [AppService, AuthguardGuard,AuthguardGuardens]
})


export class AppModule { }
