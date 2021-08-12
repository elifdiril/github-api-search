import React, { useState, useEffect } from "react";
import "../styles/main.css";
import { useSelector, useDispatch } from "react-redux";
import Buttons from "../components/Buttons";
import Table from "../components/Table";

const MainPage = () => {

  //get selected button from local storage if there is no sb then set js
  const [selectedButton, setSelectedButton] = useState(
    localStorage.getItem("selectedButton")
      ? localStorage.getItem("selectedButton")
      : "js"
  );

  useEffect(() => {
    localStorage.setItem("selectedButton", selectedButton);
  });

  //get repo from redux
  const product = useSelector((state) => state.repoReducer.repo);

  const dispatch = useDispatch();

  //get search input from local storage
  const [searchInput, setSearchInput] = useState(
    localStorage.getItem("searchInput")
  );

  useEffect(() => {
    //get repo according to selected language
    if (selectedButton === "js") dispatch({ type: "GET_JS_REPOS" });
    else if (selectedButton === "scala") dispatch({ type: "GET_SC_REPOS" });
    else if (selectedButton === "py") dispatch({ type: "GET_PY_REPOS" });

    //fixes if search input is not empty get data according to search input in local storage 
    if (searchInput !== "" && product) {
      filterData(product, searchInput);
    }

    //avoid endless call filterData
    if (product && searchInput) {
      filterData(product, searchInput);
    }
  }, [searchInput, selectedButton]);

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
    localStorage.setItem("searchInput", e.target.value);
  };

  const filterData = (arr, searchInput) => {
    let newArr = arr.filter(
      (x) => x.repo.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    );

    if (selectedButton === "js")
      dispatch({ type: "SEARCH_JS", payload: newArr });
    else if (selectedButton === "scala")
      dispatch({ type: "SEARCH_SC", payload: newArr });
    else if (selectedButton === "py")
      dispatch({ type: "SEARCH_PY", payload: newArr });
  };

  return (
    <>
      <Buttons
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />

      <input
        type="text"
        onChange={onChangeSearchInput}
        value={searchInput}
        className="searchInputTextField"
        placeholder="Search... "
      />

      <Table product={product} />
    </>
  );
};

export default MainPage;
