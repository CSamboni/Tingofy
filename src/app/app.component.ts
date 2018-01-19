import { Component } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  name: any;
  msgVal: string;
  displayName: string;
  // messages = null;

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.items = db.list('messages/').valueChanges();
    this.messages = db.list('messages/')

    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        // this.user = this.db.object('users/' + auth.uid);
        this.name = auth;
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
     this.afAuth.auth.signOut();
  }

  chatSend(theirMessage: string) {
    this.messages.push({ message: theirMessage });
    this.msgVal = '';
  }

  // chatSend(theirMessage: string) {
  //   this.db.database.ref('messages/'+lugar.id).set(lugar);
  // }

}
