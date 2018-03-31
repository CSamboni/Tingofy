import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  lesson: any = {};
  constructor(private service: UsersService) {}
  saveLesson() {
    this.lesson.id = Date.now();
    this.service.saveLesson(this.lesson);
    this.lesson = {};
  }
}
