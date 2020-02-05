export const featureName = 'shoppingFeature';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingItemModel } from '../models';

export interface ShoppingState {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};


// Selectors

// 1. Create a feature
const selectFeature = createFeatureSelector<ShoppingState>(featureName);
// 2. 1 per branch
const selectListBranch = createSelector(selectFeature, f => f.list);
// 3. Helpers
const { selectAll: selectAllListItems } = fromList.adapter.getSelectors(selectListBranch);


// 4. what components need

// TODO ShopingItemModel[]
export const selectShoppingItemModel = createSelector(selectAllListItems,
  (items) => items as ShoppingItemModel[]
);
