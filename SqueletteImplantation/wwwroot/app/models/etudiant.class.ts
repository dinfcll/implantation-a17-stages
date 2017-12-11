export class Etudiant {

     
       


        constructor(public noDa: number, 
                    public nom: string,
                    public prenom: string,
                    public  addresseCourriel: string,
                    public  annee: string,
                    public  profil: string, 
                    public  pathCV: string,
                    public noEnseignant: number,
                    public motPasse: string,
                    public noTel: string, 
                    public id: number){}
}