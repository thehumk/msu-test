export const ActionType = {
  ENABLE_APPLICATION: `enableApplication`,
  LOAD_FILMS: `loadFilms`,
  CHANGE_PAGE: `changePage`,
  GET_COMMENTS: `getComments`,
  ADD_COMMENT: `addComment`,
  DELETE_COMMENT: `deleteComment`,
  CLOSE_COMMENTS: `closeComments`,
}

export const ActionCreator = {
  enableApplication: (status) => ({
    type: ActionType.ENABLE_APPLICATION,
    payload: status,
  }),

  loadFilms: (films, page) => ({
    type: ActionType.LOAD_FILMS,
    payload: {films, page},
  }),

  changePage: (page) => ({
    type: ActionType.CHANGE_PAGE,
    payload: page,
  }),

  getComments: (id, comments) => ({
    type: ActionType.GET_COMMENTS,
    payload: {id, comments},
  }),

  addComment: (id, comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: {id, comment},
  }),

  deleteComment: (id, comment) => ({
    type: ActionType.DELETE_COMMENT,
    payload: {id, comment},
  }),

  closeComment: () => ({
    type: ActionType.CLOSE_COMMENTS,
  }),
}
