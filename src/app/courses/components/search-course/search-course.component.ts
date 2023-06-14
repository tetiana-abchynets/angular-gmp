import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ICourse } from '../../../core/models/course';
import { courses as data } from '../../../core/mocks/courses';

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

  constructor(private filterPipe: FilterPipe) {}

  ngOnInit() {
    this.courses = data;
  }

  onSearch(): void {
    const filteredCourses: ICourse[] = this.filterPipe.transform(
      this.courses,
      this.searchValue
    );
    this.filteredCourses.emit(filteredCourses);
  }
}
