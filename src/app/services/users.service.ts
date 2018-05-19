import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import * as marked from 'marked';

@Injectable()
export class UsersService {
  API_ENDPOINT = 'https://tingofy.firebaseio.com';
  users: any = [];
  lessons: any = [];

  constructor(private afDB: AngularFireDatabase, private http: Http) {}
  public getUsers() {
    return this.afDB.list('users/');
  }
  public saveLesson(lesson) {
    this.afDB.database.ref('lessons/' + lesson.id).set(lesson);
  }
  public getLessons() {
    return this.afDB.list('lessons/');
  }
  public getLesson(id) {
    return this.afDB.object('lessons/' + id);
  }
  // convert markdown string to
  public markdownToHtml(md: string) {
    return marked(md);
  }
}
