import { FeaturedSection } from "../ui/home/featured-section";
import { Footer } from "../ui/home/footer";
import { Navbar } from "../ui/home/navbar";
import { TitleModal } from "../ui/home/title-modal";
import { Titles } from "../ui/home/titles";

export const Home = () => {
  return (
    <div className="system flex flex-col">
      <Navbar />
      <FeaturedSection />
      <Titles />
      <TitleModal />
      <Footer />
    </div>
  );
};
