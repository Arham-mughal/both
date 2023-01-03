import './App.css';
import Navbar from './Components/Navbar';
import '../src/Assets/vendor/bootstrap/css/bootstrap.min.css';
import '../src/Assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../src/Assets/vendor/glightbox/css/glightbox.min.css';
import '../src/Assets/vendor/swiper/swiper-bundle.min.css';
import '../src/Assets/vendor/aos/aos.css';
import { BrowserRouter } from "react-router-dom";
import Banner from './Components/Banner/Banner';
import FeaturesB from './Components/Banner/BannerFeatures';
import About from './Components/About/About';
import Six from './Components/About/SixFeatures/Six';
import Sectionb from './Components/About/Sectionb';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Banner />
        <FeaturesB />
        <About />
        <Sectionb />
        <Six />
      </BrowserRouter>

    </div>
  );
}

export default App;
