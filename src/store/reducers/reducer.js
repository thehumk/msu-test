import {ActionType} from '../actions/actions';

const InitialState = {
  isApplicationReady: false,
  films: [],
  page: 1,
  comments: {},
  currentFilm: ``,
}

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.ENABLE_APPLICATION:
      return Object.assign({}, state, {
        isApplicationReady: action.payload,
      });
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload.films,
        page: action.payload.page,
      });
    case ActionType.GET_COMMENTS:
      return Object.assign({}, state, {
        comments: {
          ...state.comments,
          [action.payload.id]: action.payload.comments,
        },
        currentFilm: action.payload.id,
      });
    case ActionType.ADD_COMMENT:
      return Object.assign({}, state, {
        comments: Object.assign({}, state.comments, {
          [action.payload.id]: [...state.comments[action.payload.id], action.payload.comment],
        }),
      });
    case ActionType.DELETE_COMMENT:
      return Object.assign({}, state, {
        comments: Object.assign({}, state.comments, {
          [action.payload.id]: state.comments[action.payload.id].filter((elem) => elem !== action.payload.comment),
        })
      });
    case ActionType.CLOSE_COMMENTS:
      return Object.assign({}, state, {
        currentFilm: ``,
      });
    case ActionType.CHANGE_PAGE:
      return Object.assign({}, state, {
        page: action.payload,
      })
    default: return state;
  }
}
