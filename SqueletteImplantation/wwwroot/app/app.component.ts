import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
 template: `<h1>Hello {{name}}</h1>
 <router-outlet></router-outlet>
  
 
`,

//<loginEnseignant></loginEnseignant>
 /* templateUrl:`./../html/index1.html`,
  styleUrls:[`./../css/style_page_accueil.css`],*/
  //styles: [`
    //        `],
})
export class AppComponent  { 
  name = 'Romy Steve'; 
 
}
