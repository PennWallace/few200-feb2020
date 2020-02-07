import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { LibraryBookState } from '../../reducers';
import { LibraryBookModel } from '../../models';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryListComponent implements OnInit {
  @Input() model: LibraryBookModel[] = [

  ];
  constructor(private store: Store<LibraryBookState>) { }

  ngOnInit() {
  }

}
