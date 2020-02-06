import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDigitalLibraryComponent } from './my-digital-library.component';
import { NewBookSubmissionComponent } from './new-book-submission/new-book-submission.component';
import { BookAuthorInputComponent } from './new-book-submission/book-author-input/book-author-input.component';
import { BookTitleInputComponent } from './new-book-submission/book-title-input/book-title-input.component';
import { BookFormatInputComponent } from './new-book-submission/book-format-input/book-format-input.component';
import { BookSubmitBtnComponent } from './new-book-submission/book-submit-btn/book-submit-btn.component';
import { LibraryListComponent } from './library-list/library-list.component';



@NgModule({
  declarations: [MyDigitalLibraryComponent, NewBookSubmissionComponent, BookAuthorInputComponent,
    BookTitleInputComponent, BookFormatInputComponent, BookSubmitBtnComponent, LibraryListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyDigitalLibraryComponent
  ]
})
export class MyDigitalLibraryModule { }
