import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/projects/project";
import ScrollToTopButton from "./Components/scroll/scroll";
import Services from "./Components/Services/Services";

const App = () => {
  return <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Project/>
    <Contact/>
    <Footer/>
    <ScrollToTopButton/>
  </div>;
};

export default App;
