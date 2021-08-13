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
      : "javascript"
  );

  useEffect(() => {
    localStorage.setItem("selectedButton", selectedButton);
  });

  const valuesInStore = useSelector(val => val);
  const dispatch = useDispatch();

  const [repos, setRepos] = useState(valuesInStore.repoReducer);

  useEffect(() => {
    _getRepos(selectedButton, searchInput)
  });

  const _getRepos = (language, _searchInput) => {
    if (_searchInput === "") {
      fetch(`https://api.github.com/search/repositories?q=language:${language}`)
        .then(response => response.json())
        .then(response => {
          setRepos(response.items);
        })
    }else{
      fetch(`https://api.github.com/search/repositories?q=language:${language}+description:${_searchInput}`)
      .then(response => response.json())
      .then(response => {
        setRepos(response.items);
      })
    }
  }

  //get search input from local storage
  const [searchInput, setSearchInput] = useState(
    localStorage.getItem("searchInput") ? localStorage.getItem("searchInput") : ""
  );

  useEffect(() => {
   //fixes if search input is not empty get data according to search input in local storage 
    if (searchInput !== "" && repos) {
      filterData(repos, searchInput);
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
    _getRepos(selectedButton, searchInput)
    dispatch({ type: "GET_REPOS", payload: newArr, language: selectedButton });
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

      <Table product={repos} />
    </>
  );
};

export default MainPage;
