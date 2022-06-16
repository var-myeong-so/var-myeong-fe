import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";
import SearchMainResult from "../components/SearchMainResult";
import SearchSideLayout from "../components/SearchSideLayout";
import Spinner from "react-bootstrap/Spinner";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const filter = searchParams.get("filter");
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(``);
  const [searchInput, setSearchInput] = useState(q);
  const [totalCount, setTotalCount] = useState(0);
  const temp2 = "http://www.ecsimsw.com:8080";
  const [classCount, setClassCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [variableCount, setVariableCount] = useState(0);
  const [lastCount, setLastCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const QueryInputChange = (newWord) => {
    setSearchInput(newWord);
  };

  const getTotalCount = async () => {
    const totalCountRes = await fetch(temp2 + `/code/count/${q}`).then(
      (totalCountRes) => totalCountRes.text()
    );
    if (totalCountRes < 10) {
      setLastCount(totalCountRes);
    }
    setTotalCount(totalCountRes);
  };

  const getData = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  const changeUrl = (newUrl) => {
    setUrl(newUrl);
  };

  const changeTotalCount = (newCount) => {
    if (newCount === "0") {
      return;
    }
    if (newCount < 10) {
      setLastCount(newCount);
    } else {
      setLastCount(10);
    }
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
          searchWord={q}
          filter={filter}
          handleInputChange={handleInputChange}
          QueryInputChange={QueryInputChange}
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
            {loading === true ? (
              <Spinner
                className="search-spinner"
                animation="border"
                role="status"
                variant="primary"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>
                <div className="search-main-header">
                  {data.length === 0 ? (
                    <></>
                  ) : (
                    <div className="search-page-info">
                      Showing <strong>1 - {lastCount}</strong> out of{" "}
                      <strong>{totalCount}</strong> results
                    </div>
                  )}
                </div>
                <div className="search-main-body">
                  <ul className="search-result-container">
                    {data.length === 0 ? (
                      <div className="search-no-result">
                        We didn't find any matching results.
                      </div>
                    ) : (
                      data.map((it) => (
                        <SearchMainResult
                          key={it.id}
                          itemList={it}
                          searchWord={q}
                        />
                      ))
                    )}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
