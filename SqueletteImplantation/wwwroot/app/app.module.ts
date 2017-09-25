import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { RouterModule, Routes }   from '@angular/router';
import {  LoginEnseignantComponent }  from './loginenseignant.component';


import { pageAccueilEnseignantComponent } from "./pageAccueilEnseignant.component";

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
    component: pageAccueilEnseignantComponent
  },
  {
     path: '**', 
     redirectTo: '',
     pathMatch: 'full',
  },
  {
    path: 'Login', 
    component: LoginEnseignantComponent
  },
  
]


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule,  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,
                   LoginEnseignantComponent,
                 
                  pageAccueilEnseignantComponent],
  bootstrap:    [ AppComponent ]
})



export class AppModule { }
