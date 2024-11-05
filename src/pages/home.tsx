import { FeaturedSection } from "../ui/home/featured-section";
import { Navbar } from "../ui/home/navbar";
import { Titles } from "../ui/home/titles";

export const Home = () => {
  return (
    <div className="system">
      <Navbar />
      <FeaturedSection />
      <Titles />
    </div>
  );
};
