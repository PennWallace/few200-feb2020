import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLibrary from './library.reducer';
import { LibraryBookModel } from '../models';

export const featureName = 'libraryFeature';
export interface LibraryBookState {
  list: fromLibrary.LibraryState;
}

export const reducers = {
  list: fromLibrary.reducer
};


// 1. If you are in a feature module, create a feature selector
const selectFeature = createFeatureSelector<LibraryBookState>(featureName);

// 2. Create a selector for each "branch" of the state.
const selectListBranch = createSelector(selectFeature, f => f.list);

// 3. Any helpers?
const { selectAll: selectAllListItems } = fromLibrary.adapter.getSelectors(selectListBranch);

// 4. What you need for the components
export const selectLibraryModel = createSelector(selectAllListItems,
  (items) => items.map(item => ({ ...item, isTemporary: item.id.toString().startsWith('T') } as LibraryBookModel))
);
