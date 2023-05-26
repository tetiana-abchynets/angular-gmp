import {Component, Input} from '@angular/core';
import { ICourse } from '../../models/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  @Input() course: ICourse;
  creationDate: Date;
  formattedDate: string;

  ngOnInit(): void {
    this.creationDate = new Date(this.course.creationDate);
    this.formattedDate = this.creationDate.getMonth() + "/" + (this.creationDate.getDate()+1) + "/" + this.creationDate.getFullYear()
    // date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
  }
}
