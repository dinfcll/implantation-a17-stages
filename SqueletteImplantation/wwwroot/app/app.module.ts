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
import { PageDetailEtudiantComponent } from "./pageDetailEtudiant.component";

import { AppService } from "./app.service";

const appRoutes: Routes = [
  {
    path:'',
    component: LoginEnseignantComponent,
    pathMatch: 'full',
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
 {
    path: 'Login', 
    component: LoginEnseignantComponent 
  },
  {
    path: 'profil-enseignant',
    component:  ProfilEnseignantComponent
},
  {
    path: 'detailEntreprise/:id', 
    component:  PageDetailEntrepriseComponent
  },
  
  
    {
      path: 'detailEtudiant/:noDa', 
      component:  PageDetailEtudiantComponent
  },
    {
        path: 'gestionenseignant',
        component: GestionEnseignant

    }]

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
                  GestionEnseignant],
   
  bootstrap: [ AppComponent ],
  providers: [AppService]
})

export class AppModule { }
