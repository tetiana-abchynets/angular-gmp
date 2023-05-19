import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourceComponent } from './new-cource.component';

describe('NewCourceComponent', () => {
  let component: NewCourceComponent;
  let fixture: ComponentFixture<NewCourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCourceComponent]
    });
    fixture = TestBed.createComponent(NewCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
