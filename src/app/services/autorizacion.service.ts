import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import { Router } from '@angular/router';
// import swal from 'sweetalert2';
import * as firebase from 'firebase/app';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class AutorizacionService {
  constructor (private angularFireAuth: AngularFireAuth, private router: Router, public snackbar: MatSnackBar) {
    this.isLogged()
  }
  public facebookLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result)=>{
        // this.email = result.user.email;
        this.openSnackBar('Signin with Facebook', 'Success')
        this.router.navigate(['home'])
      }) .catch((error)=>{
        console.log(error)
        this.openSnackBar(`Ops.. ${error}`, 'Error')
      })
  }
  public googleLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result)=>{
        // this.email = result.user.email;
        this.openSnackBar('Signin with Google', 'Success')
        this.router.navigate(['home'])
      }) .catch((error)=>{
        console.log(error)
        this.openSnackBar(`Ops.. ${error}`, 'Error')
      })
  }
  public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response)=> {
        this.openSnackBar('Signin','Success')
        this.router.navigate(['home'])
      }) .catch((error)=>{
        console.log(error)
        this.openSnackBar(`Ops.. ${error}`, 'Error')
      })
  }
  public registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response)=> {
        this.openSnackBar('Signup','Success')
        this.router.navigate(['home'])
      }) .catch((error)=>{
        console.log(error)
        this.openSnackBar(`Ops.. ${error}`, 'Error')
      })
  }
  public isLogged(){
    return this.angularFireAuth.authState
  }
  public logout(){
    this.angularFireAuth.auth.signOut()
    this.openSnackBar('Logout', 'Success')
    this.router.navigate([''])
  }
  public getUser(){
    return this.angularFireAuth.auth;
  }
  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, { duration: 2500 });
  }
}
