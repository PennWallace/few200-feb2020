import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookSubmissionComponent } from './new-book-submission.component';

describe('NewBookSubmissionComponent', () => {
  let component: NewBookSubmissionComponent;
  let fixture: ComponentFixture<NewBookSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBookSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
