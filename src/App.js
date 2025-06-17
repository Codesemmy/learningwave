
import './App.css';
import Home from "./Components/Home";
import About from './Components/About';
import Vision from './Components/Vision';
import Work from "./Components/Work";
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Vision/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
