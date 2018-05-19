import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { LessonComponent } from './lesson/lesson.component';
import { SafePipe } from './pipe/safe.pipe';
import { MdToHtmlPipe } from './pipe/md-to-html.pipe';

import { AutorizacionService } from './services/autorizacion.service';
import { UsersService } from './services/users.service';
import { MyGuard } from './services/my-guard.service';

// Material Angular components
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [MyGuard] },
  { path: 'admin', component: AdminComponent },
  { path: 'lesson/:id', component: LessonComponent, canActivate: [MyGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    AdminComponent,
    LessonComponent,
    SafePipe,
    MdToHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    // Firebase
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'talkiefy'),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // Material Angular
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [ AutorizacionService, UsersService, MyGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
