import SearchBar from "../components/Products/SearchBar";
import Sort from "../components/Products/Sort";
import BackButton from "../components/Shared/BackButton";
import "../components/Products/Products.css";
import Filters from "../components/Products/Filters";
import ProductsGrid from "../components/Products/ProductsGrid";

function Products() {
  return (
    <div className="page-container">
      <div className="products-top-bar">
        <BackButton />
        <SearchBar />
        <Sort />
      </div>
      <div className="products-main-grid">
        <Filters />
        <ProductsGrid />
      </div>
    </div>
  );
}

export default Products;
