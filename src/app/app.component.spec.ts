import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BreadcrumbsComponent } from './core/components/breadcrumbs/breadcrumbs.component';
import { SectionComponent } from './courses/components/section/section.component';
import { CourseListComponent } from './courses/components/course-list/course-list.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SearchCourseComponent } from './courses/components/search-course/search-course.component';
import { AddCourseComponent } from './courses/components/add-course/add-course.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      MatToolbarModule,
      MatIconModule
    ],
    declarations: [
      AppComponent,
      HeaderComponent,
      BreadcrumbsComponent,
      SectionComponent,
      CourseListComponent,
      FooterComponent,
      SearchCourseComponent,
      AddCourseComponent
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
