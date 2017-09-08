import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1><listeEnseignant></listeEnseignant>`,
  templateUrl:`./../html/index1.html`,
  styleUrls:[`./../css/style_page_accueil.css`],
  /*styles: [`
            `],*/
})
export class AppComponent  { name = 'Romy Steve'; }
