import * as actionTypes from "../types";

export const getRepos = (props) => (dispatch) => {
  return {
    type: actionTypes.GET_REPOS,
    payload: props.repo,
    language: props.language
  };
};
