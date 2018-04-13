const uuidv1 = require('uuid/v1')

export function categoreisHasErrored(bool) {
    return {
        type: 'CATEGORIE_HAS_ERRORED',
        hasErrored: bool
    };
}
export function categoriesIsLoading(bool) {
    return {
        type: 'CATEGORIES_IS_LOADING',
        isLoading: bool
    };
}


const categoriesFetchDataSuccess = categories => {
    return {
        type: 'CATEGORIES_FETCH_DATA_SUCCESS',
        categories
    }
}

export const getCategories = () => {
  return dispatch => {
    return fetch(`http://localhost:3000/categories`)
      .then(response => response.json())
      .then(categories => dispatch(categoriesFetchDataSuccess(categories)))
      .catch(error => console.log(error));
  }
}