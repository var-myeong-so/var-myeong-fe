const SearchSideLabel = ({ filter, filterCount }) => {
  return (
    <label className="search-lang-label">
      <div className="search-lang-input-wrapper">
        <label className="search-checkbox-wrapper">
          <span className="search-checkbox">
            <input type="radio" className="search-checkbox-input" value="" />
          </span>
          <span className="search-lang-value-wrapper">
            <span className="search-lang-value">{filter}</span>
          </span>
        </label>
      </div>
      <span className="search-lang-count">{filterCount}</span>
    </label>
  );
};

export default SearchSideLabel;
