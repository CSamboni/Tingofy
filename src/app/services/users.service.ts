import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database/database";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class UsersService {
  API_ENDPOINT = 'https://talkiefy.firebaseio.com';
  users:any = [];

  constructor(private afDB:AngularFireDatabase, private http: Http){}
  public getUsers(){
    return this.afDB.list('users/');
  }
}
