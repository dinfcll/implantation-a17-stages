import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <nav>
      <a routerLink="/accueil-enseignant" routerLinkActive="active">Page d'accueil enseignant</a>
              
  </nav>

  <router-outlet></router-outlet>
`,//<listeEnseignant></listeEnseignant>
 // templateUrl:`./../html/index1.html`,
  //styleUrls:[`./../css/style_page_accueil.css`],
  /*styles: [`
            `],*/
})
export class AppComponent  { name = 'Romy Steve'; }
