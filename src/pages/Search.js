import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";
import SearchMainResult from "../components/SearchMainResult";
import SearchSideLayout from "../components/SearchSideLayout";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(``);
  const [searchInput, setSearchInput] = useState(q);
  const [totalCount, setTotalCount] = useState(0);
  const temp2 = "http://www.ecsimsw.com:8080";
  const [classCount, setClassCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [variableCount, setVariableCount] = useState(0);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const getTotalCount = async () => {
    const totalCountRes = await fetch(temp2 + `/code/count/${q}`).then(
      (totalCountRes) => totalCountRes.text()
    );
    setTotalCount(totalCountRes);
  };

  const getData = async () => {
    const res = await fetch(url).then((res) => res.json());
    const classCountRes = await fetch(temp2 + `/code/count/class/${q}`).then(
      (classCountRes) => classCountRes.text()
    );
    const variableCountRes = await fetch(
      temp2 + `/code/count/variable/${q}`
    ).then((variableCountRes) => variableCountRes.text());
    const wordCountRes = await fetch(temp2 + `/code/count/${q}`).then(
      (wordCountRes) => wordCountRes.text()
    );
    setClassCount(classCountRes);
    setVariableCount(variableCountRes);
    setWordCount(wordCountRes);
    setData(res);
  };

  const changeUrl = (newUrl) => {
    setUrl(newUrl);
  };

  const changeTotalCount = (newCount) => {
    setTotalCount(newCount);
  };

  useEffect(() => {
    setUrl(temp2 + `/code/${q}`);
    getTotalCount();
  }, []);

  useEffect(() => {
    getData();
  }, [url]);

  return (
    <>
      <div className="search-header-layout">
        <SearchHeader
          searchInput={searchInput}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="search-body-layout">
        <div className="search-body">
          <SearchSideLayout
            classCount={classCount}
            variableCount={variableCount}
            wordCount={wordCount}
            searchWord={q}
            currentUrl={url}
            changeUrl={changeUrl}
            changeTotalCount={changeTotalCount}
          />
          <div className="search-main-layout">
            <div className="search-main-header">
              <div className="search-page-info">
                Showing <strong>1 - 10</strong> out of{" "}
                <strong>{totalCount}</strong> results
              </div>
            </div>
            <div className="search-main-body">
              <ul className="search-result-container">
                {data.map((it) => (
                  <SearchMainResult key={it.id} itemList={it} searchWord={q} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
