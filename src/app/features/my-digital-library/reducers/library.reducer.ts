import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, on, createReducer } from '@ngrx/store';
import * as libraryActions from '../actions/library.actions';

export interface LibraryBookEntity {
  id: string;
  title: string;
  author: {
    firstname: string;
    lastname: string;
  };
  format: string;
}

export interface LibraryState extends EntityState<LibraryBookEntity> {

}

export const adapter = createEntityAdapter<LibraryBookEntity>();

const initialState: LibraryState = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: `Cat's Cradle`, author: { firstname: 'Kurt', lastname: 'Vonnegut' }, format: 'Paperback' },
    2: { id: '2', title: 'Fight Club', author: { firstname: 'Chuck', lastname: 'Palahniuk' }, format: 'Paperback' },
  }
};

adapter.getInitialState();


const reducerFunction = createReducer(
  initialState,
  on(libraryActions.bookAdded, (s, a) => adapter.addOne(a.payload, s)),
  on(libraryActions.bookAddedSuccessfully, (s, a) => adapter.addOne(a.payload, s))
);



export function reducer(state: LibraryState = initialState, action: Action) {
  return reducerFunction(state, action);
}
