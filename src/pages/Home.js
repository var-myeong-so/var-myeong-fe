import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // useEffect(() => {
  //   if (searchInput !== "") {
  //     console.log("Changed in Home");
  //     navigate(`/search?q=${searchInput}`);
  //   }
  // }, [searchInput, navigate]);

  return (
    <>
      <div className="site-title">var myeong</div>
      <div className="sub-title">Search across a half million git repos</div>
      <div>
        <form method="get" action="/search">
          <div className="input-group input-group2 mx-auto mt-3 mb-3">
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
    </>
  );
};

export default Home;
