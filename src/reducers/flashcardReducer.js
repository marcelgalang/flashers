const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'FLASHCARDS_FETCH_DATA_SUCCESS':
      return action.flashcards;
    default:
      return state
  }

}