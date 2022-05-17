import { useEffect, useState } from "react";
import SearchSideLabel from "./SearchSideLabel";

const SearchSideLayout = () => {
  const [filterCount, setFilterCount] = useState([]);

  const getFilterCount = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    ).then((res) => res.json());
    setFilterCount(
      res.map((it) => {
        return it.id;
      })
    );
  };

  useEffect(() => {
    getFilterCount();
  }, []);

  return (
    <div className="search-side-layout">
      <div className="search-field">
        <fieldset className="search-lang-layout">
          <legend className="search-lang-title">Filter</legend>
          <div className="search-lang-checkbox-layout">
            <SearchSideLabel
              filter={"Class"}
              filterCount={filterCount[0]}
              id={0}
            />
            <SearchSideLabel
              filter={"Method"}
              filterCount={filterCount[1]}
              id={1}
            />
            <SearchSideLabel
              filter={"Variable"}
              filterCount={filterCount[2]}
              id={2}
            />
          </div>
        </fieldset>
      </div>
      {/* <div className="search-field">
        <fieldset className="search-lang-layout">
          <legend className="search-lang-title">Language</legend>
          <div className="search-lang-checkbox-layout">
            <SearchSideLabel lang={"Java"} />
            <SearchSideLabel lang={"JavaScript"} />
          </div>
        </fieldset>
      </div> */}
    </div>
  );
};

export default SearchSideLayout;
