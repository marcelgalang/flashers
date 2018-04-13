import { createStore, combineReducers, applyMiddleware } from 'redux';
import flashcards from '../reducers/flashcardReducer';
import categories from '../reducers/categoryReducer'

import thunk from 'redux-thunk'
import { getFlashcards } from '../actions/flashcardsActions';
import { getCategories } from '../actions/categoriesActions';

const rootReducer = combineReducers({
  flashcards,
  categories
})
export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}

export const store = configureStore();

store.dispatch(getFlashcards());
store.dispatch(getCategories());
console.log(flashcards)