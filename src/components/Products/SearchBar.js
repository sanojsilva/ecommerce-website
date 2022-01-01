import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

function SearchBar() {
  const [text, setText] = useState("");
  const location = useLocation();
  const history = useHistory();

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      history.push({
        pathname: "/products",
        state: {
          ...location.state,
          searchText: text,
        },
      });
    }
  }

  return (
    <div className="search-bar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        placeholder="Search..."
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default SearchBar;
