import Banner from "../components/Home/Banner";
import FeaturedItems from "../components/Home/FeaturedItems";
import Hero from "../components/Home/Hero";
import "../components/Home/Home.css";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedItems />
      <Banner />
    </div>
  );
}

export default Home;
