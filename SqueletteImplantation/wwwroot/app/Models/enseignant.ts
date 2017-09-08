export class Enseignant {

      private m_NoEnseignant: number;
      private m_NomUtilisateur:string;
      private m_password: string;
      private m_prenom:string;
      private m_Courriel:string;
      private m_Nom: string;
      constructor(nomutil:string, password:string)
      {
         this.m_NomUtilisateur=nomutil;
         this.m_password=password;
      }

       get NoEns(): number{
        return this.m_NoEnseignant;
    }

    get Password(): string{
        return this.m_password;
    }




}