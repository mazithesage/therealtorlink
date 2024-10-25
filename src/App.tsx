import Booking from "./components/Booking";
import Navbar from "./sections/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Rooms from "./sections/Rooms";
import Facilities from "./sections/Facilities";
import Best from "./sections/Best";
import Gallery from "./sections/Gallery";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Facilities />
      <Best />
      <Gallery />
      <Footer whiteBg />

      {/* Modals */}
      <Booking />
      <MusicPlayer />
    </div>
  );
};

export default App;
