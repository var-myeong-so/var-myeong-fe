const SearchSideLabel = ({ lang }) => {
  return (
    <label class="search-lang-label">
      <div class="search-lang-input-wrapper">
        <label class="search-checkbox-wrapper">
          <span class="search-checkbox">
            <input type="checkbox" class="search-checkbox-input" value="" />
          </span>
          <span className="search-lang-value-wrapper">
            <span class="search-lang-value">{lang}</span>
          </span>
        </label>
      </div>
      <span class="search-lang-count">128,280</span>
    </label>
  );
};

export default SearchSideLabel;
