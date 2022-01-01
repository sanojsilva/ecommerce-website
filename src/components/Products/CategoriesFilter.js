import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CategoriesFilter() {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  async function getCategories() {
    const result = await axios.get("http://localhost:1337/categories");
    setCategories(result.data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="categories-filter">
      <h2>Categories Filter</h2>
      <div className="categories-filter-list">
        {categories.map((item) => (
          <Link
            to={{
              pathname: "/products",
              state: {
                ...location.state,
                catId: item.id,
              },
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesFilter;
