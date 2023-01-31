// importing comps
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import HeroSection from './components/HeroSection';

// third-party library css
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
