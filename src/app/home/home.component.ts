import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users = null;
  lessons = null;

  constructor(private service: UsersService) {
    service.getUsers().valueChanges().subscribe(users => {
      this.users = users;
    });
    service.getLessons().valueChanges().subscribe(lessons => {
      this.lessons = lessons;
    });
  }
}
