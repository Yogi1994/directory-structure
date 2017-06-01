/**
 * @fileoverview The reducer for the app.
 */

const initialState = {};

const LOAD_PWD_LIST = 'LOAD_PWD_LIST';

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PWD_LIST:
      {
        return Object.assign({}, state, {
          dirList: action.data.directories,
          filePath: action.filePath
        });
      }
    default:
      return state;
  }
};
