import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";
import SearchMainResult from "../components/SearchMainResult";
import SearchSideLayout from "../components/SearchSideLayout";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [searchInput, setSearchInput] = useState(q);
  const [totalCount, setTotalCount] = useState(0);
  let header = new Headers({
    "Access-Control-Allow-origin": "*",
  });

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const getTotalCount = async () => {
    const res = await fetch(
      // `https://jsonplaceholder.typicode.com/comments?postId=${q}`
      `https://www.ecsimsw.com:8080/code/${q}`,
      { headers: header }
    ).then((res) => res.json());
    // res.setHeader("Access-Control-Allow-origin", "http://183.100.1.179:8080");
    console.log(res);
    setTotalCount(res.length);
  };

  useEffect(() => {
    getTotalCount();
  }, [q]);

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
          <SearchSideLayout />
          <div className="search-main-layout">
            <div className="search-main-header">
              <div className="search-page-info">
                Showing <strong>1 - 10</strong> out of{" "}
                <strong>{totalCount}</strong> results
              </div>
            </div>
            <div className="search-main-body">
              <ul className="search-result-container">
                <SearchMainResult />
                <SearchMainResult />
                <SearchMainResult />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
