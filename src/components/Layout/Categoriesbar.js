import axios from "axios";
import { useEffect, useState } from "react";

function Categoriesbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategores();
  }, []);

  async function getCategores() {
    const result = await axios.get("http://localhost:1337/categories");
    console.log(result.data);
    setCategories(result.data);
  }

  return (
    <div className="categories-bar">
      {categories.map((item) => {
        return <div className="category-item">{item.name}</div>;
      })}
    </div>
  );
}

export default Categoriesbar;
