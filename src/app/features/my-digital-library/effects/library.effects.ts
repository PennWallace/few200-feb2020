import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import * as libraryActions from '../actions/library.actions';
import { switchMap } from 'rxjs/operators';


// @Injectable()
// export class LibraryEffects {

//  saveBook$ = createEffect(() =>
//    this.actions$.pipe(
//      ofType(libraryActions.bookAdded),
//       switchMap(originalAction => this.http.)
//     )


//   ); , { dispatch: false; }

// }
