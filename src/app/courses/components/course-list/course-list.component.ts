import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ICourse } from '../../../core/models/course';
import { courses as data } from '../../../core/mocks/courses';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnChanges {
  courses!: ICourse[];
  @Input() filteredCourses!: ICourse[];

  ngOnInit() {
    this.courses = data;
  }

  ngOnChanges() {
    this.courses = this.filteredCourses;
  }

  loadMore(): void {
    console.log('Load more');
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter((item) => item.id !== id);
  }

  trackByFn(index: number) {
    return index;
  }
}
