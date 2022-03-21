import { Link } from "react-router-dom";

const SearchHeader = ({ searchInput, handleInputChange }) => {
  return (
    <div className="search-header ">
      <div className="site-name">
        <Link to={"/"}>var myeong</Link>
      </div>
      <form method="get" action="/search">
        <div className="input-group input-group2 mx-auto">
          <input
            type="text"
            name="q"
            value={searchInput}
            onChange={handleInputChange}
            autoFocus="autoFocus"
            className="form-control form-control2"
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchHeader;
