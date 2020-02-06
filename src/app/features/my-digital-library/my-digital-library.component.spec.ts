import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDigitalLibraryComponent } from './my-digital-library.component';

describe('MyDigitalLibraryComponent', () => {
  let component: MyDigitalLibraryComponent;
  let fixture: ComponentFixture<MyDigitalLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDigitalLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDigitalLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
