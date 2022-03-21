import { Link } from "react-router-dom";

const MyHeader = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>
          <img src="../logo192.png" alt="" height="30" />
        </Link>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/api"}>API</Link>
          </li>
          <li>
            <Link to={"/server"}>searchcode server</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MyHeader;
