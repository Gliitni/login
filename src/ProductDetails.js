import {useParams} from 'react-router-dom';

const ProductDetails = () => {
    const params=useParams();

    // console.log("params",params.ProductId)
    return (
        <section>
    <h1>Product Details</h1>
    <p>{params.ProductId}</p>
    </section>
    )
  };
  
  export default ProductDetails;