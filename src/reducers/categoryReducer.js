const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'CATEGORIES_FETCH_DATA_SUCCESS':
      return action.categories;
    default:
      return state
  }

}