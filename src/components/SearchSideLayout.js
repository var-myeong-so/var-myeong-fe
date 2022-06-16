import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchSideLayout = ({
  classCount,
  variableCount,
  wordCount,
  searchWord,
  currentUrl,
  changeUrl,
  changeTotalCount,
}) => {
  const navigate = useNavigate();
  const checkOnlyOne = (checkThis, filter) => {
    const temp2 = "http://www.ecsimsw.com:8080";
    const checkboxes = document.getElementsByName("filter");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      } else {
        if (filter === "word" || checkboxes[i].checked === false) {
          changeUrl(temp2 + `/code/${searchWord}`);
          changeTotalCount(wordCount);
          navigate(`/search?q=${searchWord}`);
        } else {
          if (filter === "class") {
            changeTotalCount(classCount);
            navigate(`/search?q=${searchWord}&filter=Class`);
          } else if (filter === "variable") {
            changeTotalCount(variableCount);
            navigate(`/search?q=${searchWord}&filter=Variable`);
          }
          changeUrl(temp2 + `/code/${filter}/${searchWord}`);
        }
      }
    }
  };

  const handleTotalCount = async () => {
    let flag = 0;
    const temp2 = "http://www.ecsimsw.com:8080";
    const classCountRes = await fetch(
      temp2 + `/code/count/class/${searchWord}`
    ).then((classCountRes) => classCountRes.text());
    const variableCountRes = await fetch(
      temp2 + `/code/count/variable/${searchWord}`
    ).then((variableCountRes) => variableCountRes.text());
    const wordCountRes = await fetch(temp2 + `/code/count/${searchWord}`).then(
      (wordCountRes) => wordCountRes.text()
    );
    const checkboxes = document.getElementsByName("filter");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked === true) {
        if (checkboxes[i].value === "class") {
          changeTotalCount(classCountRes);
        } else if (checkboxes[i].value === "variable") {
          changeTotalCount(variableCountRes);
        } else {
          changeTotalCount(wordCountRes);
        }
      } else {
        flag = flag + 1;
      }
    }
    if (flag === 3) {
      changeTotalCount(wordCountRes);
    }
  };

  useEffect(() => {
    let temp = currentUrl.split("/");
    temp.pop();
    temp.push(searchWord);
    changeUrl(temp.join("/"));
    handleTotalCount();
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
                      value="class"
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
                      value="variable"
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
                      value="word"
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
