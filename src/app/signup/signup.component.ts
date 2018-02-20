import { Component } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  registro:any = {};
  constructor(private autorizacionService: AutorizacionService) {}
  signup(){
    this.autorizacionService.registro(this.registro.email, this.registro.password);
  }
  facebookLogin(){
    this.autorizacionService.facebookLogin()
  }
  googleLogin(){
    this.autorizacionService.googleLogin()
  }
}
