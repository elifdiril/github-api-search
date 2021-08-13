import * as actionTypes from "../types/types";

const repoReducer = (repo= [], action) => {
  switch (action.type) {
    case actionTypes.GET_REPOS:
      return { repo: action.payload };

    default:
      return repo;
  }
};

export default repoReducer;
