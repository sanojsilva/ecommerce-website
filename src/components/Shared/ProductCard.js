import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image} className="product-card-img" />
      <div className="product-card-name">{props.name}</div>
      <div className="product-card-price">Rs. {props.price}</div>
    </div>
  );
}

export default ProductCard;
