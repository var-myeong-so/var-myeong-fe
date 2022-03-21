import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";
import SearchMainResult from "../components/SearchMainResult";
import SearchSideLayout from "../components/SearchSideLayout";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [searchInput, setSearchInput] = useState(q);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // useEffect(() => {
  //   if (searchInput !== q) {
  //     console.log("Changed in search");
  //     setSearchParams({ q: searchInput });
  //   }
  //   if (searchInput === "") {
  //     setSearchParams({});
  //   }
  // }, [searchInput, q, setSearchParams]);

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
              <div class="search-page-info">
                Showing <strong>1 - 10</strong> out of <strong>995,195</strong>{" "}
                results
              </div>
            </div>
            <div className="search-main-body">
              <ul className="search-result-container">
                <SearchMainResult />
                <SearchMainResult />
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
