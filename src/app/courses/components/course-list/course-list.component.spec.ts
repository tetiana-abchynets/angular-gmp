import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { CourseListComponent } from './course-list.component';
import { CourseItemComponent } from '../course-item/course-item.component';

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
});
