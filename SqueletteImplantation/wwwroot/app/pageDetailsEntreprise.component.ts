import { Component } from '@angular/core';
import { Entreprise } from './models/entreprise.class';
import {Http} from '@angular/http';

@Component({
  selector: 'detail-entreprise',
  templateUrl: `/./../html\Detail_Entreprise.html`
})
export class PageDetailEntrepriseComponent  {
    entreprise: Entreprise;
    ID: Number;
    constructor(private http: Http)
    {
        
    }

    RemplirInfo(ID: Number)
    {
        this.http.get("")
    }




}