import { LibraryBookEntity } from '../reducers/library.reducer';
import { createAction, props } from '@ngrx/store';

let currentId = 99;




export const libraryLoaded = createAction(
  '[library] library loaded',
  props<{ payload: LibraryBookEntity[] }>()
);

export const bookAddedSuccessfully = createAction(
  '[library] book added successfully',
  props<{ oldId: string, payload: LibraryBookEntity }>()
);


export const bookAdded = createAction(
  '[library] add item',
  (title, firstname, lastname, format) => ({
    payload: {
      id: 'T' + currentId++,
      title,
      author: {
        firstname,
        lastname
      },
      format
    }
  })
);
