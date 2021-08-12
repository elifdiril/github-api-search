import * as actionTypes from "../types";

export const getJsRepos = () => (dispatch) => {
  return {
    type: actionTypes.GET_JS_REPOS,
  };
};

export const getScRepos = () => (dispatch) => {
  return {
    type: actionTypes.GET_SC_REPOS,
  };
};

export const getPyRepos = () => (dispatch) => {
  return {
    type: actionTypes.GET_PY_REPOS,
  };
};

export const searchJs = (props) => (dispatch) => {
  return {
    type: actionTypes.SEARCH_JS,
    payload: props.newRepo,
  };
};

export const searchSc = (props) => (dispatch) => {
  return {
    type: actionTypes.SEARCH_SC,
    payload: props.newRepo,
  };
};

export const searchPy = (props) => (dispatch) => {
  return {
    type: actionTypes.SEARCH_PY,
    payload: props.newRepo,
  };
};
