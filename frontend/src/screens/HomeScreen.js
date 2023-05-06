import Slider from "../components/Slider";
import Banner from "../components/Banner";

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <Slider title="Trending This Week" type="trending" isLarge />
      <Slider title="Friends List" type="Friends" isLarge />
    </div>
  );
};

export default HomeScreen;
