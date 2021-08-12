import * as actionTypes from "../types/types";

const productsJs = [];
const productsSc = [];
const productsPy = [];

const addProductsJs = (quantity) => {
  const startId = productsJs.length;
  let randomNumber;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    randomNumber = Math.floor(Math.random() * 20 + 10);
    productsJs.push({
      id: id,
      username: "username " + id,
      repo: "js repo " + id,
      description: "description " + id,
      stars: id,
      forks: id,
      lastUpdateDate: randomNumber + ".10.2020",
    });
  }
};

addProductsJs(20);

const addProductsSc = (quantity) => {
  const startId = productsSc.length;
  let randomNumber;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    randomNumber = Math.floor(Math.random() * 20 + 10);
    productsSc.push({
      id: id,
      username: "username " + id,
      repo: "sc repo " + id,
      description: "description " + id,
      stars: id,
      forks: id,
      lastUpdateDate: randomNumber + ".10.2020",
    });
  }
};

addProductsSc(30);

const addProductsPy = (quantity) => {
  const startId = productsPy.length;
  let randomNumber;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    randomNumber = Math.floor(Math.random() * 20 + 10);
    productsPy.push({
      id: id,
      username: "username " + id,
      repo: "py repo " + id,
      description: "description " + id,
      stars: id,
      forks: id,
      lastUpdateDate: randomNumber + ".10.2020",
    });
  }
};

addProductsPy(50);

const repoReducer = (repo, action) => {
  switch (action.type) {
    case actionTypes.GET_JS_REPOS:
      return { repo: productsJs };

    case actionTypes.GET_SC_REPOS:
      return { repo: productsSc };

    case actionTypes.GET_PY_REPOS:
      return { repo: productsPy };

    case actionTypes.SEARCH_JS:
      return { repo: action.payload };

    case actionTypes.SEARCH_SC:
      return { repo: action.payload };

    case actionTypes.SEARCH_PY:
      return { repo: action.payload };

    default:
      return productsJs;
  }
};

export default repoReducer;
