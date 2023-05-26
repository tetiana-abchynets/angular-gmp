import { Component } from '@angular/core';
import { courses as data } from '../../data/courses';
import { ICourse } from '../../models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses: ICourse[] = data;
}
