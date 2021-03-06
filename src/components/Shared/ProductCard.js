import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <Link to={`/product-details/${props.id}`} className="product-card">
      <img src={props.image} className="product-card-img" />
      <div className="product-card-name">{props.name}</div>
      <div className="product-card-price">Rs. {props.price}</div>
    </Link>
  );
}

export default ProductCard;
