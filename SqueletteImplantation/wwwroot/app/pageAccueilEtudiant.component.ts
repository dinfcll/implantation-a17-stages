import { Http } from '@angular/http';

import { Entreprise } from './models/entreprise.class';

import { Component } from '@angular/core';

import {  Router, RouterModule, Routes}   from '@angular/router';



declare var jBox:any;
@Component({
    selector: 'accueil_enseignant',

    templateUrl: `./../html/AccueilEtudiant.html`,
    //styleUrls: [`./../css/accueil_enseignant.css`],
})

export class pageAccueilEtudiantComponent
{
    etu: any;
    user:string;
   file: File;
   formData: FormData;
   Message:string;

    
    constructor(private http: Http, private router: Router)
    {
        this.user=localStorage.getItem('currentUser') ;
        this. etu = JSON.parse(this.user);
        console.log(this.etu);
        
    }
    

    Deconnexion() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/Login']);
    }

    public fileChange(event:any)
    {
            let fileList: FileList = event.target.files;
            
            if(fileList.length > 0)
            {
                this.file = fileList[0];
                this.formData = new FormData();
                this.formData.append('cv', this.file);
                this.Message = this.file.name;
            }
    }
 
    public onClickAddTrace()
    {
        
            this.http.post("api/ajoutfichier" , this.formData).subscribe(reponse => this.FichierValide(reponse));
        
    }

    public FichierValide(retour :any) 
    {
        if(retour.status === 200)
        {
            if(retour._body != null)
            {
                console.log("Fichier envoyé avec succès !");
               
                
                new jBox('Notice', {
                    content: 'Fichier envoyé avec succès',
                    color: 'green',
                    stack: true
                });
    
            }
        }
    }
    

   

    

     
}

