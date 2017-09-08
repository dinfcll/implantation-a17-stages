import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl:`./../html/index2.html`,
  //styleUrls:[`./../css/monstyle.css`],
  styles: [`
            body {
             margin:0;
            }

            .img_fond {
              position: fixed;
              top:0;
              left:0;
              width:100%;
              height:100%;
            }
            .container {
              width:500px;
              height:500px;
              margin:100px auto auto 425px;
              
              background: rgba(47,79,79,0.7);
              border-radius:15px;
              text-align:center;
              position:relative;
              z-index:1;
              
            }
            #DA {
              width:240px;
              height:44px;
              margin-top:70px;
              margin-bottom:20px;
              font-size:10px;
              border: 1px solid #000;
              padding-left:40px;
              
              
            }
            #MdpDA {
              width:240px;
              height:44px;
              margin-bottom:20px;
              font-size:10px;
              border: 1px solid #000;
              padding-left:35px;
              
              
            }
            #Prof {
              width:240px;
              height:44px;
              margin-top:120px;
              margin-bottom:20px;
              font-size:10px;
              border: 1px solid #000;
              padding-left:40px;
              
              
            }
            #MdpProf {
              width:240px;
              height:44px;
              margin-bottom:20px;
              font-size:10px;
              border: 1px solid #000;
              padding-left:35px;
              
              
            }
            #trait {
              width:100%;
              margin-top:50px;
              color:black;
              position:absolute;
              
              
            }
            #etu {
              width:20%;
              margin-top:25px;
              margin-left:25px;
              font-size:30px;
              color:black;
              position:absolute;
              
              
            }
            #pro {
              width:20%;
              margin-top:75px;
              margin-left:25px;
              font-size:30px;
              color:black;
              position:absolute;
              
              
            }
            
           `],
})
export class AppComponent  { name = 'Romy Steve'; }
