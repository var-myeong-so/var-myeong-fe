import SearchSideLabel from "./SearchSideLabel";

const SearchSideLayout = () => {
  return (
    <div className="search-side-layout">
      <div>
        <fieldset class="search-lang-layout">
          <legend class="search-lang-title">Language</legend>
          <div class="search-lang-checkbox-layout">
            <SearchSideLabel lang={"Java"} />
            <SearchSideLabel lang={"JavaScript"} />
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default SearchSideLayout;
