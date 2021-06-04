import {ActionCreator} from "./actions";

export const loadFilms = (page = 1) => (dispatch, _getState, api) => {
  api.get(`list_movies.json?limit=15&page=${page}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(data.data.movies, page));
    })
    .catch((err) => {
      alert(`Что-то пошло не так: ` + err);
      throw err;
    })
}
