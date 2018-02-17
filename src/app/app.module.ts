import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AutorizacionService } from './services/autorizacion.service';
// import { MyGuard } from './services/my-guard.service';

const appRoutes: Routes = [
  { path:'', component: LandingComponent, pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Firebase
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'talkiefy'),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [ AutorizacionService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
