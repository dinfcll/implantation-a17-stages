import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { RouterModule, Routes }   from '@angular/router';
import {  MaListeEnseignantComponent }  from './listenseignant.component';
import { MaListeEntrepriseComponent } from "./listentreprise.component";
import { MaListeEtudiantComponent } from "./listetudiant.component";

import { pageAccueilEnseignantComponent } from "./pageAccueilEnseignant.component";

const appRoutes: Routes=[
  {
    path:'accueil-enseignant',
    component: pageAccueilEnseignantComponent
  }
]


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule,  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,
                  MaListeEnseignantComponent,
                  MaListeEntrepriseComponent,
                  MaListeEtudiantComponent,
                  pageAccueilEnseignantComponent],
  bootstrap:    [ AppComponent ]
})



export class AppModule { }
