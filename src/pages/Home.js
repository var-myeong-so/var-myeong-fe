import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef();

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

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
    <>
      <div className="site-title">myeong</div>
      <div className="sub-title">Search across a half million git repos</div>
      <div>
        {/* <form method="get" action="/search"> */}
        <div className="input-group input-group2 mx-auto mt-3 mb-3">
          <input
            type="text"
            ref={inputRef}
            name="q"
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
        {/* </form> */}
      </div>
    </>
  );
};

export default Home;
