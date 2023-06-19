import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ICourse } from '../../../core/models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnChanges {
  @Input() filteredCourses!: ICourse[];
  courses: ICourse[] = [];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.courses = this.coursesService.getList();
  }

  ngOnChanges() {
    this.courses = this.filteredCourses;
  }

  loadMore(): void {
    console.log('Load more');
  }

  deleteCourse(id: number): void {
    this.coursesService.removeCourse(id);
  }

  trackByFn(index: number) {
    return index;
  }
}
