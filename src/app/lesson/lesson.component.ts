import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  lesson: any = {};
  id: any = null;
  constructor(private service: UsersService, private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {
    this.id = this.route.snapshot.params['id'];
    if (this.id !== 'new') {
      this.service.getLesson(this.id)
        .valueChanges().subscribe(lesson => {
          this.lesson = lesson;
      });
    }
  }
  ngOnInit() {
  }
}
