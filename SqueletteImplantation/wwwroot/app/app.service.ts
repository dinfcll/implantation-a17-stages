import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class AppService {
    flag: boolean;
    private PageModif=new BehaviorSubject<boolean>(false);
    currentPageModif=this.PageModif.asObservable();

    constructor(){ }

    changeFlag(flag:boolean){
       this.PageModif.next(flag);
    }
}