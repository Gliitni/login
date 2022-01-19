import {Link} from 'react-router-dom';
import MainHeader from './MainHeader';
const Products = () => {
    return(
        <section>
    <h1>Products</h1>
    <ul>
        <MainHeader />
    <li><Link to='/products/p1'> Book </Link></li>
    <li><Link to='/products/p2'> Pen </Link></li>
    <li><Link to='/products/p3'> Pencil </Link></li>
    </ul>
    </section>
    )
  };
  
  export default Products;