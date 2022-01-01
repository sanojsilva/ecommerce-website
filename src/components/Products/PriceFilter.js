import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

function PriceFilter() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const history = useHistory();
  const location = useLocation();

  function handleClick() {
    history.push({
      pathname: "/products",
      state: {
        ...location.state,
        min: min,
        max: max,
      },
    });
  }

  return (
    <div className="price-filter">
      <h2>Price Filter</h2>
      <div className="price-filter-grid">
        <label>Min</label>
        <input
          type="text"
          value={min}
          onChange={(event) => setMin(event.target.value)}
        />
      </div>
      <div className="price-filter-grid">
        <label>Max</label>
        <input
          type="text"
          value={max}
          onChange={(event) => setMax(event.target.value)}
        />
      </div>
      <button onClick={handleClick}>Filter</button>
    </div>
  );
}

export default PriceFilter;
