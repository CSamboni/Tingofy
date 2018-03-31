import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AutorizacionService } from './autorizacion.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable()
export class MyGuard implements CanActivate {
  loggedIn = false;
  constructor(private autorizacionService: AutorizacionService,
              private router: Router, public snackbar: MatSnackBar) {
    this.autorizacionService.isLogged()
      .subscribe((result) => {
        if (result && result.uid) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
          this.openSnackBar('You Must Login', 'Warning');
          this.router.navigate(['/login']);
        }
      }, (error) => {
        this.loggedIn = false;
        this.openSnackBar('You Must Login', 'Error');
        this.router.navigate(['/login']);
      });
  }
  canActivate() {
    return this.loggedIn;
  }
  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, { duration: 2500 });
  }
}
