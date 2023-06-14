import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { CourseListComponent } from './course-list.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { courses as coursesMock } from '../../../core/mocks/courses';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent, CourseItemComponent],
      imports: [MatCardModule, MatIconModule]
    });
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log "Load more" when loadMore method is called', () => {
    spyOn(console, 'log');

    component.loadMore();

    expect(console.log).toHaveBeenCalledWith('Load more');
  });

  it('should remove the course with the specified id', () => {
    component.courses = coursesMock;

    const courseId = 2;
    component.deleteCourse(courseId);

    expect(component.courses.length).toBe(coursesMock.length - 1);
    expect(
      component.courses.find((course) => course.id === courseId)
    ).toBeUndefined();
  });
});
