import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import TMS from "./components/tms/TMS";
import Wesh from "./components/Wesh";

function App() {
  return (
    <div className="App">
      <Wesh />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <TMS />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
