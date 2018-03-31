import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
// import swal from 'sweetalert2';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class AutorizacionService {
  private user: Observable<firebase.User>;
  private authState: any;

  constructor (private angularFireAuth: AngularFireAuth, private db: AngularFireDatabase,
    private router: Router, public snackbar: MatSnackBar) {
      this.isLogged();
      this.user = angularFireAuth.authState;
  }

  authUser() {
    return this.user;
  }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  // public facebookLogin(){
  //   this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  //     .then((result)=>{
  //       // this.email = result.user.email;
  //       this.openSnackBar('Signin with Facebook', 'Success')
  //       this.router.navigate(['home'])
  //     }) .catch((error)=>{
  //       console.log(error)
  //       this.openSnackBar(`Ops.. ${error}`, 'Error')
  //     })
  // }
  //
  // public googleLogin(){
  //   this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //     .then((result)=>{
  //       // this.email = result.user.email;
  //       this.authState = user;
  //       const status = 'online';
  //       this.setUserData(email, username, status);
  //
  //       this.openSnackBar('Signin with Google', 'Success')
  //       this.router.navigate(['home'])
  //     }) .catch((error)=>{
  //       console.log(error)
  //       this.openSnackBar(`Ops.. ${error}`, 'Error')
  //     })
  // }

  public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.setUserStatus('online');

        this.openSnackBar('Signin', 'Success');
        this.router.navigate(['home']);
      }) .catch((error) => {
        console.log(error);
        this.openSnackBar(`Ops.. ${error}`, 'Error');
      });
  }

  public registro = (username, email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        const status = 'online';
        this.setUserData(email, username, status);

        this.openSnackBar('Signup', 'Success');
        this.router.navigate(['home']);
      }) .catch((error) => {
        console.log(error);
        this.openSnackBar(`Ops.. ${error}`, 'Error');
      });
  }

  public isLogged() {
    return this.angularFireAuth.authState;
  }

  public logout() {
    this.setUserStatus('offline');
    this.angularFireAuth.auth.signOut();
    this.openSnackBar('Logout', 'Success');
    this.router.navigate(['']);
  }

  public getUser() {
    return this.angularFireAuth.auth;
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, { duration: 2500 });
  }

  setUserData(email: string, username: string, status: string): void {
    const path = `users/${this.currentUserId}`;
    const data = {
      email: email,
      username: username,
      status: status
    };

    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }

  setUserStatus(status: string): void {
    const path = `users/${this.angularFireAuth.auth.currentUser.uid}`;

    const data = {
      status: status
    };

    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }
}
