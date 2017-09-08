
export class Entreprise  {
private m_NoEntreprise:number;
private m_NoTel: string;
private m_Poste: string;
private m_Personne_Responsable: string;
private m_NbrConfirmation: number;
private m_NbrPeutetre: number;
private m_NbreProblamentNon: number;
private m_NbreDeRefus: number;
private m_Annee: number;

constructor(NoEntreprise:number, NoTel:string, Poste: string, Personne_Responsable: string,
    NbrConfirmation: number, NbrPeutetre: number,NbreProblamentNon: number,
    NbreDeRefus: number,Annee: number)
{
   this. m_NoEntreprise=NoEntreprise;
   this.m_NoTel=NoTel;
  
   this.m_Personne_Responsable=Personne_Responsable;
   this.m_NbrConfirmation=NbrConfirmation;
   this.m_NbrPeutetre=NbrPeutetre;
   this.m_NbreProblamentNon=NbreProblamentNon;
   this.m_NbreDeRefus=NbreDeRefus;
   this.m_Annee=Annee;
}

get NoEnt(): number{
    return this.m_NoEntreprise;
}

get Notel(): string{
    return this.m_NoTel;
}
set( tel : string){
     this.m_NoTel=tel;
}

get PersResp(): string{
    return this.m_Personne_Responsable;
}
set PersResp( pers : string){
    this.m_Personne_Responsable=pers;
}

get NbConfirmation(): number{
    return this.m_NbrConfirmation;
}
set NbConfirmation( nbre : number){
    this.m_NbrConfirmation=nbre;
}

get NbPeutetre(): number{
    return this.m_NbrPeutetre;
}
set NbPeutetre( nbre : number){
    this.m_NbrPeutetre=nbre;
}

get NbProblamentNon(): number{
    return this.m_NbreProblamentNon;
}
set NbProblamentNon( nbre : number){
    this.m_NbreProblamentNon=nbre;
}

get NbDeRefus(): number{
    return this.NbDeRefus;
}
set NbDeRefus( nbre : number){
    this.m_NbreDeRefus=nbre;
}

get Annee(): number{
    return this.m_Annee;
}
set Annee( an : number){
    this.m_Annee=an;
}









}