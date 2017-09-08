import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {  MaListeEnseignantComponent }  from './listenseignant.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  MaListeEnseignantComponent],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
