export class Etudiant {

      private m_id:number;
      private m_password: string;
      constructor(id:number, password:string)
      {
         this. m_id=id;
         this.m_password=password;
      }

       get ID(): number{
        return this.m_id;
    }

    get Password(): string{
        return this.m_password;
    }




}