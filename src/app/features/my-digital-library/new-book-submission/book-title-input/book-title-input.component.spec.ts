import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTitleInputComponent } from './book-title-input.component';

describe('BookTitleInputComponent', () => {
  let component: BookTitleInputComponent;
  let fixture: ComponentFixture<BookTitleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTitleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTitleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
