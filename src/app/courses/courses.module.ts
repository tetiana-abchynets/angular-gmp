import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { SectionComponent } from './components/section/section.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseBorderDirective } from './directives/course-border.directive';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    SectionComponent,
    SearchCourseComponent,
    AddCourseComponent,
    CourseBorderDirective
  ],
  exports: [
    CourseListComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
