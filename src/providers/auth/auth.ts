import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public currentUser: Observable<firebase.User>;;
  constructor() {
    console.log('Hello AuthProvider Provider');
  }
}
