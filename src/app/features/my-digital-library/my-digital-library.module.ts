import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDigitalLibraryComponent } from './my-digital-library.component';
import { NewBookSubmissionComponent } from './components/new-book-submission/new-book-submission.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';




@NgModule({
  declarations: [MyDigitalLibraryComponent, NewBookSubmissionComponent, LibraryListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [
    MyDigitalLibraryComponent
  ]
})
export class MyDigitalLibraryModule { }
