import About from "../components/layouts/About";
import ChoiceSection from "../components/layouts/ChoiceSection";
import Hero from "../components/layouts/Hero";
import Impact from "../components/layouts/Impact";
import Navbar from "./../components/layouts/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ChoiceSection />
      <About/>
      <Impact/>
    </div>
  );
};

export default Home;
