import { Component, Input } from '@angulare/core';
import { Entreprise } from './entreprise';

@Component({
   selector: 'entreprise-detail',
   templateUrls:`./../html/detail_entreprise.html`,
   })

   export class EntrepriseDetailComponent{
     @Input() entreprise: Entreprise;
    
   }

   //l'ajouter dans le AppComponent(2eme html apres connection du professeur) 