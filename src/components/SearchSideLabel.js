import { useEffect, useState } from "react";
// import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const SearchSideLabel = ({ filter, filterCount, id }) => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const q = searchParams.get("q");
  // const filter0 = searchParams.get("filter[0]");
  // const filter1 = searchParams.get("filter[1]");
  // const filter2 = searchParams.get("filter[2]");

  const [checkFilter, setCheckFilter] = useState(false);

  const isChecked = async () => {
    setCheckFilter(!checkFilter);
    // const res = await fetch(
    //   `https://jsonplaceholder.typicode.com/${filter}`
    // ).then((res) => res.json());
    // // console.log(res);
    // if (checkFilter) {
    //   navigate(`/search?q=${q}&filter[${id}]=${filter}`);
    //   // setSearchParams(location, { filter: 1 });
    // } else {
    //   navigate(`/search?q=${q}`);
    //   // setSearchParams("/search", { remove: ["filter"] });
    // }
  };

  // useEffect(() => {
  //   isChecked();
  // }, []);

  // console.log(checkFilter, filter);
  return (
    <label className="search-lang-label">
      <div className="search-lang-input-wrapper">
        <label className="search-checkbox-wrapper" onChange={isChecked}>
          <span className="search-checkbox">
            <input type="checkbox" className="search-checkbox-input" value="" />
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
