import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ICourse } from '../../../core/models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css'],
  providers: [FilterPipe]
})
export class SearchCourseComponent implements OnInit {
  searchValue = '';
  courses!: ICourse[];
  @Output() filteredCourses: EventEmitter<ICourse[]> = new EventEmitter<
    ICourse[]
  >();

  constructor(
    private filterPipe: FilterPipe,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.courses = this.coursesService.getList();
  }

  onSearch(): void {
    const filteredCourses: ICourse[] = this.filterPipe.transform(
      this.courses,
      this.searchValue
    );
    this.filteredCourses.emit(filteredCourses);
  }
}
