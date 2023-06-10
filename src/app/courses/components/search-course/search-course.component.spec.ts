import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchCourseComponent } from './search-course.component';

describe('SearchCourseComponent', () => {
  let component: SearchCourseComponent;
  let fixture: ComponentFixture<SearchCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCourseComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(SearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log the searchValue when onSearch method is called', () => {
    spyOn(console, 'log');
    const searchValue = 'test';
    component.searchValue = searchValue;

    component.onSearch();

    expect(console.log).toHaveBeenCalledWith(searchValue);
  });
});
