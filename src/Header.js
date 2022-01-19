import {  Link } from 'react-router-dom';
import Welcome from './Welcome';
// import classes from './MainHeader.css';
const Header = () => {
    return (
    <header>
        {/* <nav> */}
            <ul>
                <li>
                    
                    <Link to="/Welcome">Home</Link>
                    
                </li>
                {/* <li>
                <NavLink activeClassName={classes.active} to="/Products">Products</NavLink>
                </li>
                 */}
            </ul>
        {/* </nav> */}
    </header>
    )
  };
  
  export default Header;