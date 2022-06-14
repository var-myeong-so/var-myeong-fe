// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import SearchSideLabel from "./SearchSideLabel";

import { useEffect } from "react";

const SearchSideLayout = ({
  classCount,
  variableCount,
  wordCount,
  searchWord,
  currentUrl,
  changeUrl,
}) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const q = searchParams.get("q");
  // const [classCount, setClassCount] = useState(0);
  // const [wordCount, setWordCount] = useState(0);
  // const [variableCount, setVariableCount] = useState(0);

  // const getFilterCount = async () => {
  //   const classCountRes = await fetch(
  //     `http://www.ecsimsw.com:8080/code/count/class/${q}`
  //   ).then((classCountRes) => classCountRes.text());
  //   const variableCountRes = await fetch(
  //     `http://www.ecsimsw.com:8080/code/count/variable/${q}`
  //   ).then((variableCountRes) => variableCountRes.text());
  //   const wordCountRes = await fetch(
  //     `http://www.ecsimsw.com:8080/code/count/${q}`
  //   ).then((wordCountRes) => wordCountRes.text());
  //   console.log(classCountRes, variableCountRes, wordCountRes);
  //   setClassCount(classCountRes);
  //   setVariableCount(variableCountRes);
  //   setWordCount(wordCountRes);
  // };

  const checkOnlyOne = (checkThis, filter) => {
    console.log(searchWord);
    const checkboxes = document.getElementsByName("filter");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      } else {
        if (filter === "word" || checkboxes[i].checked == false) {
          changeUrl(`http://www.ecsimsw.com:8080/code/${searchWord}`);
        } else {
          changeUrl(`http://www.ecsimsw.com:8080/code/${filter}/${searchWord}`);
        }
      }
    }
    // if (flag === 3) {
    //   changeUrl(`http://www.ecsimsw.com:8080/code/${searchWord}`);
    // }
  };

  useEffect(() => {
    let temp = currentUrl.split("/");
    temp.pop();
    temp.push(searchWord);
    changeUrl(temp.join("/"));
  }, [searchWord]);

  return (
    <div className="search-side-layout">
      <div className="search-field">
        <fieldset className="search-lang-layout">
          <legend className="search-lang-title">Filter</legend>
          <div className="search-lang-checkbox-layout">
            <label className="search-lang-label">
              <div className="search-lang-input-wrapper">
                <label className="search-checkbox-wrapper">
                  <span className="search-checkbox">
                    <input
                      name="filter"
                      type="checkbox"
                      className="search-checkbox-input"
                      value=""
                      onChange={(e) => checkOnlyOne(e.target, "class")}
                    />
                  </span>
                  <span className="search-lang-value-wrapper">
                    <span className="search-lang-value">Class</span>
                  </span>
                </label>
              </div>
              <span className="search-lang-count">{classCount}</span>
            </label>
            <label className="search-lang-label">
              <div className="search-lang-input-wrapper">
                <label className="search-checkbox-wrapper">
                  <span className="search-checkbox">
                    <input
                      name="filter"
                      type="checkbox"
                      className="search-checkbox-input"
                      value=""
                      onChange={(e) => checkOnlyOne(e.target, "variable")}
                    />
                  </span>
                  <span className="search-lang-value-wrapper">
                    <span className="search-lang-value">Variable</span>
                  </span>
                </label>
              </div>
              <span className="search-lang-count">{variableCount}</span>
            </label>
            <label className="search-lang-label">
              <div className="search-lang-input-wrapper">
                <label className="search-checkbox-wrapper">
                  <span className="search-checkbox">
                    <input
                      name="filter"
                      type="checkbox"
                      className="search-checkbox-input"
                      value=""
                      onChange={(e) => checkOnlyOne(e.target, "word")}
                    />
                  </span>
                  <span className="search-lang-value-wrapper">
                    <span className="search-lang-value">Word</span>
                  </span>
                </label>
              </div>
              <span className="search-lang-count">{wordCount}</span>
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default SearchSideLayout;
