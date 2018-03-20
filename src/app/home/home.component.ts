import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users = null;

  constructor(private UsersService: UsersService) {
    UsersService.getUsers().valueChanges().subscribe(users => {
      this.users = users;
    })
  }
}
