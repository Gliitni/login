import { Link } from "react-router-dom";
// import classes from './MainHeader.css';
const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          {/* <li>
                    <Link to="/Login">Login</Link>
                </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
