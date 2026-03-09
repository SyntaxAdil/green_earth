import About from "../components/layouts/About";
import ChoiceSection from "../components/layouts/ChoiceSection";
import Hero from "../components/layouts/Hero";
import Impact from "../components/layouts/Impact";
import Navbar from "./../components/layouts/Navbar";
import Form from './../components/layouts/Form';
import Footer from "../components/layouts/Footer";
import ScrollToTop from './../components/ScrollToTop';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ChoiceSection />
      <About/>
      <Impact/>
      <Form/>
      <Footer />
      <ScrollToTop/>
    </div>
  );
};

export default Home;
