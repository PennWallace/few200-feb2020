import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormatInputComponent } from './book-format-input.component';

describe('BookFormatInputComponent', () => {
  let component: BookFormatInputComponent;
  let fixture: ComponentFixture<BookFormatInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormatInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
