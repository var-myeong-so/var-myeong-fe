import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchHeader = ({ searchInput, handleInputChange }) => {
  const navigate = useNavigate();
  const inputRef = useRef();

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      if (keyword.length < 1) {
        inputRef.current.focus();
        console.log("No content");
        return;
      }
      navigate(`/search?q=${keyword}`);
    }
  };

  return (
    <div className="search-header">
      <div className="site-name">
        <Link to={"/"}>var myeong</Link>
      </div>
      <div className="input-group input-group2 mx-auto">
        <input
          type="text"
          name="q"
          ref={inputRef}
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={(e) => search(e)}
          autoFocus="autoFocus"
          className="form-control form-control2"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
      </div>
    </div>
  );
};

export default SearchHeader;
