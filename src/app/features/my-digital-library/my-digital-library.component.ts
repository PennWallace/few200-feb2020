import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LibraryBookModel } from './models';
import { Store } from '@ngrx/store';
import { LibraryBookState, selectLibraryModel } from './reducers';

@Component({
  selector: 'app-my-digital-library',
  templateUrl: './my-digital-library.component.html',
  styleUrls: ['./my-digital-library.component.css']
})
export class MyDigitalLibraryComponent implements OnInit {


  library$: Observable<LibraryBookModel[]>;
  constructor(private store: Store<LibraryBookState>) { }

  ngOnInit() {
    this.library$ = this.store.select(selectLibraryModel);
  }

}
