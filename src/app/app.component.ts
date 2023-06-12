import { Component } from '@angular/core';
import { ICourse } from './core/models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filteredCourses: ICourse[] = []

  handleFilteredCourses(courses: ICourse[]): void {
    this.filteredCourses = courses;
  }
}
