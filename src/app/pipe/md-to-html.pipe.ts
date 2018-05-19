import { Pipe, PipeTransform } from '@angular/core';
import { UsersService } from '../services/users.service';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  constructor(private service: UsersService ) {}

  transform(value: string): any {
    return this.service.markdownToHtml(value);
  }
}
