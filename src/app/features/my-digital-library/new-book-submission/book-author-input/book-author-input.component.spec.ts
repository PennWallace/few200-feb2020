import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorInputComponent } from './book-author-input.component';

describe('BookAuthorInputComponent', () => {
  let component: BookAuthorInputComponent;
  let fixture: ComponentFixture<BookAuthorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAuthorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAuthorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
