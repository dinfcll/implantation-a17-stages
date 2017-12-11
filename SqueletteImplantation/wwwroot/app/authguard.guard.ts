import {Injectable, Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {CanActivate,CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class AuthguardGuard implements CanActivate, CanActivateChild {
    private IsLoggedIn:boolean;
    private redirectUrl:string;
   
  

   constructor(private router:Router){
     
   }

  
   canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
     this.redirectUrl=state.url;
     return this.CheckLogin(this.redirectUrl);
   }

   canActivateChild(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    this.redirectUrl=state.url;
    return this.CheckLogin(this.redirectUrl);
   }

   //this.user=localStorage.getItem('currentUser') ;
   //this. etu = JSON.parse(this.user)[0];

   CheckLogin(url:string):boolean{
       if(this.IsLoggedIn){
            return true;
       }else{
           if(localStorage.getItem('currentUser') !== null){
               if(JSON.parse(localStorage.getItem('currentUser'))[1]=="etudiant"){
                        this.IsLoggedIn=true;
                        this.router.navigateByUrl(url);
               }else{
                this.IsLoggedIn=false;
                this.router.navigateByUrl('/Login');
                localStorage.removeItem('currentUser');
               }
                   
              
              
               
           }
           else{
            this.IsLoggedIn=false;
            this.router.navigateByUrl('/Login');
           }

       }
   }


   

  




















}