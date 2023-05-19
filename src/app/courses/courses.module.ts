import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SectionComponent } from './section/section.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { AddCourseComponent } from './add-course/add-course.component';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    SectionComponent,
    SearchCourseComponent,
    AddCourseComponent
  ],
  exports: [
    CourseListComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
