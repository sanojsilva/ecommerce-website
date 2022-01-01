import { useState } from "react";
import { useHistory, useLocation } from "react-router";

function Sort() {
  const [value, setValue] = useState("");
  const history = useHistory();
  const location = useLocation();

  function handleChange(event) {
    setValue(event.target.value);
    history.push({
      pathname: "/products",
      state: {
        ...location.state,
        sort: event.target.value,
      },
    });
  }

  return (
    <select className="sort-dropdown" value={value} onChange={handleChange}>
      <option value="created_at:desc">Latest</option>
      <option value="created_at:asc">Oldest</option>
      <option value="price:asc">Price: Low to High</option>
      <option value="price:desc">Price: High to Low</option>
    </select>
  );
}

export default Sort;
