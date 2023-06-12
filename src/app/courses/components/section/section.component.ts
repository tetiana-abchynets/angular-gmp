import { Component, EventEmitter, Output } from '@angular/core';
import { ICourse } from '../../../core/models/course';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Output() filteredCourses: EventEmitter<ICourse[]> = new EventEmitter<ICourse[]>();

  handleSearch(courses: ICourse[]): void {
    this.filteredCourses.emit(courses);
  }
}
