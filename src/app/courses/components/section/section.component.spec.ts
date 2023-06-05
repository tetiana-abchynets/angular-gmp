import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { SectionComponent } from './section.component';
import { SearchCourseComponent } from '../search-course/search-course.component';
import { AddCourseComponent } from '../add-course/add-course.component';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SectionComponent,
        SearchCourseComponent,
        AddCourseComponent
      ],
      imports: [
        MatToolbarModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
