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
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    SectionComponent,
    SearchCourseComponent,
    AddCourseComponent,
    CourseBorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe
  ],
  exports: [CourseListComponent, SectionComponent],
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
export class CoursesModule {}
