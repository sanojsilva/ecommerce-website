import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "../components/ProductDetails/Image";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import BackButton from "../components/Shared/BackButton";
import "../components/ProductDetails/ProductDetails.css";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState();

  async function getProduct() {
    const result = await axios.get(
      `http://localhost:1337/products/${params.id}`
    );
    console.log(result.data);
    setProduct(result.data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <BackButton />
      <div className="product-container">
        <Image url={`http://localhost:1337${product.mainImage.url}`} />
        <ProductInfo
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
