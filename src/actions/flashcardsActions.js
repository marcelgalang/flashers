const uuidv1 = require('uuid/v1')

export function flashcardsHasErrored(bool) {
    return {
        type: 'FLASHCARD_HAS_ERRORED',
        hasErrored: bool
    };
}
export function flashcardsIsLoading(bool) {
    return {
        type: 'FLASHCARDS_IS_LOADING',
        isLoading: bool
    };
}


const flashcardsFetchDataSuccess = flashcards => {
    return {
        type: 'FLASHCARDS_FETCH_DATA_SUCCESS',
        flashcards
    }
}

// export const getFlashcards = () => {
//   return async dispatch => {
//     const flashcards = await fetch(`http://localhost:3000/flashcards`).then(res => res.json())
//     dispatch({ type: 'FLASHCARDS_FETCH_DATA_SUCCESS', flashcards })
//   }
// }

export const getFlashcards = () => {
  return dispatch => {
    return fetch(`http://localhost:3000/flashcards`)
      .then(response => response.json())
      .then(flashcards => dispatch(flashcardsFetchDataSuccess(flashcards)))
      .catch(error => console.log(error));
  }
}