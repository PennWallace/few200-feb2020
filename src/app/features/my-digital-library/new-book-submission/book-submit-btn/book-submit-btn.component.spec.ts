import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSubmitBtnComponent } from './book-submit-btn.component';

describe('BookSubmitBtnComponent', () => {
  let component: BookSubmitBtnComponent;
  let fixture: ComponentFixture<BookSubmitBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSubmitBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSubmitBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
