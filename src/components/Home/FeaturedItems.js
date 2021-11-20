import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../Shared/ProductCard";

function FeaturedItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFeaturedItems();
  }, []);

  async function getFeaturedItems() {
    const result = await axios.get(
      "http://localhost:1337/products?featured=true"
    );
    console.log(result.data);
    setItems(result.data);
  }

  return (
    <div className="featured-container">
      <div className="featured-title">Featured Items</div>
      <div className="featured-items">
        {items.map((item) => {
          return (
            <ProductCard
              name={item.name}
              price={item.price}
              image={`http://localhost:1337${item.mainImage.url}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedItems;
