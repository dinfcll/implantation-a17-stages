export class Enseignant {

      private m_username:string;
      private m_password: string;
      constructor(username:string, password:string)
      {
         this. m_username=username;
         this.m_password=password;
      }

       get Username(): string{
        return this.m_username;
    }

    get Password(): string{
        return this.m_password;
    }




}