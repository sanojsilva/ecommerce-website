import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../Shared/ProductCard";

function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  async function getProducts() {
    // get the values from location state
    const state = location.state;
    let queryString = "";

    if (state) {
      if (state.searchText) {
        queryString += `&name_contains=${state.searchText}`;
      }

      if (state.min) {
        queryString += `&price_gte=${state.min}`;
      }

      if (state.max) {
        queryString += `&price_lte=${state.max}`;
      }

      if (state.catId) {
        queryString += `&categories.id=${state.catId}`;
      }

      if (state.sort) {
        queryString += `&_sort=${state.sort}`;
      }
    }

    console.log(queryString);

    const result = await axios.get(
      `http://localhost:1337/products?${queryString}`
    );
    console.log(result.data);
    setProducts(result.data);
  }

  useEffect(() => {
    getProducts();
  }, [location.state]);

  return (
    <div>
      <div className="products-grid">
        {products.map((item) => (
          <ProductCard
            id={item.id}
            name={item.name}
            image={`http://localhost:1337${item.mainImage.formats.medium.url}`}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsGrid;
