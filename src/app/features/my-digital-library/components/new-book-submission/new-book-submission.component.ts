import { Component, OnInit } from '@angular/core';
import { bookAddedSuccessfully, bookAdded } from '../../actions/library.actions';
import { Store } from '@ngrx/store';
import { LibraryBookState } from '../../reducers';
import { Librarybook } from '../../../../librarybook';

@Component({
  selector: 'app-new-book-submission',
  templateUrl: './new-book-submission.component.html',
  styleUrls: ['./new-book-submission.component.css']
})
export class NewBookSubmissionComponent implements OnInit {

  formats = ['Hardcover', 'Paperback', 'e-Book'];

  model = new Librarybook('', ``, '', 'Format', '');

  constructor(private store: Store<LibraryBookState>) { }

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit() {

  }
  addBook(titleEl: HTMLInputElement, firstEl: HTMLInputElement, lastEl: HTMLInputElement, formatEl: HTMLInputElement) {
    // todo: Dispatch an action
    const title = titleEl.value;
    const firstname = firstEl.value;
    const lastname = lastEl.value;
    const format = formatEl.value;
    this.store.dispatch(bookAdded(title, firstname, lastname, format));
  }
}
