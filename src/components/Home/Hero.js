import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-container">
      <img src="/images/hero.jpg" alt="" className="hero-img" />
      <Link to="/products" className="hero-link">
        Shop Now
      </Link>
    </div>
  );
}

export default Hero;
