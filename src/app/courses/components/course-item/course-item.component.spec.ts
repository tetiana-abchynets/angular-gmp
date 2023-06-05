import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent],
      imports: [
        MatCardModule,
        MatIconModule
      ]
    });
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = {
      id: 1,
      title: "Video Course 1",
      creationDate: "2023-05-24T15:26:09.842Z",
      duration: "1h 28min",
      description: "Lorem ipsum dolor sit amet"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log "Edit" when edit method is called', () => {
    spyOn(console, 'log');

    component.edit();

    expect(console.log).toHaveBeenCalledWith('Edit');
  });

  it('should initialize creationDate and formattedDate when course is defined', () => {
    component.ngOnInit();

    expect(component.creationDate).toBeDefined();
    expect(component.formattedDate).toBeDefined();
  });

  it('should emit deletedCourseId event with correct courseId on delete', () => {
    const courseId = 1;
    component.course = {
      id: 1,
      title: "Video Course 1",
      creationDate: "2023-05-24T15:26:09.842Z",
      duration: "1h 28min",
      description: "Lorem ipsum dolor sit amet"
    };
    spyOn(component.deletedCourseId, 'emit');

    component.delete();

    expect(component.deletedCourseId.emit).toHaveBeenCalledWith(courseId);
  });

});
