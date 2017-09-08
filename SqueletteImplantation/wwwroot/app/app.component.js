"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Romy Steve';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //template: `<h1>Hello {{name}}</h1>`,
        templateUrl: "./../html/index2.html",
        //styleUrls:[`./../css/monstyle.css`],
        styles: ["\n            body {\n             margin:0;\n            }\n\n            .img_fond {\n              position: fixed;\n              top:0;\n              left:0;\n              width:100%;\n              height:100%;\n            }\n            .container {\n              width:500px;\n              height:500px;\n              margin:100px auto auto 425px;\n              \n              background: rgba(47,79,79,0.7);\n              border-radius:15px;\n              text-align:center;\n              position:relative;\n              z-index:1;\n              \n            }\n            #DA {\n              width:240px;\n              height:44px;\n              margin-top:70px;\n              margin-bottom:20px;\n              font-size:10px;\n              border: 1px solid #000;\n              padding-left:40px;\n              \n              \n            }\n            #MdpDA {\n              width:240px;\n              height:44px;\n              margin-bottom:20px;\n              font-size:10px;\n              border: 1px solid #000;\n              padding-left:35px;\n              \n              \n            }\n            #Prof {\n              width:240px;\n              height:44px;\n              margin-top:120px;\n              margin-bottom:20px;\n              font-size:10px;\n              border: 1px solid #000;\n              padding-left:40px;\n              \n              \n            }\n            #MdpProf {\n              width:240px;\n              height:44px;\n              margin-bottom:20px;\n              font-size:10px;\n              border: 1px solid #000;\n              padding-left:35px;\n              \n              \n            }\n            #trait {\n              width:100%;\n              margin-top:50px;\n              color:black;\n              position:absolute;\n              \n              \n            }\n            #etu {\n              width:20%;\n              margin-top:25px;\n              margin-left:25px;\n              font-size:30px;\n              color:black;\n              position:absolute;\n              \n              \n            }\n            #pro {\n              width:20%;\n              margin-top:75px;\n              margin-left:25px;\n              font-size:30px;\n              color:black;\n              position:absolute;\n              \n              \n            }\n            \n           "],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map