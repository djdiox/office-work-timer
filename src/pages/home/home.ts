import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // pages: Array<{ title: string}>;
  tasks: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public angulafire: AngularFireDatabase,
    private afAuth: AngularFireAuth, private auth: AuthProvider, private storage: Storage, private modalCtrl: ModalController) {
    // this.tasks =  angulafire.list('/tasks');
    // Get a reference to the database service
    this.auth.currentUser = afAuth.authState;
    afAuth.authState.subscribe(() => {
      this.tasks = this.angulafire.list('/tasks'); // yey we are already logged in!
    })
  }

  taskSelected(val: string) {
    console.log(val);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((data) => {
      this.tasks = this.angulafire.list('/tasks');
      this.storage.set('accessToken', data.credential.accesToken);
      this.storage.set('idToken', data.credential.idToken);

      // this.tasks.push({title:'test'})
      console.log(data);
    }, err => console.log(err));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
