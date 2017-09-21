import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WorktimeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WorktimeProvider {

  constructor() {
    console.log('Hello WorktimeProvider Provider');
  }

}

export interface WorkTime{
  start:string,
  end:string
}