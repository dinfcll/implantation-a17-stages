export class Etudiant {

      private m_NoDA:number;
      private m_password: string;
      private m_AdresseCouriel: string;
      private m_NoTel: string;
      constructor(noda:number, password:string)
      {
         this.m_NoDA=noda;
         this.m_password=password;
      }

       get NoDa(): number{
        return this.m_NoDA;
    }

    get Password(): string{
        return this.m_password;
    }
    //a completer


}