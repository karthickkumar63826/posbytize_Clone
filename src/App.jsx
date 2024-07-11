import "./App.css";
import BottomBanner from "./banners/BottomBanner";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import NavbarTop from "./navbarTop/NavbarTop";
import Accordion from "./accordion/Accordion";
import MidBanner from "./banners/MidBanner";
import Testimonials from "./testimonials/Testimonials";
import Feature from "./feature/Feature";
import YoutubePage from "./youtubePage/YoutubePage";
import Reason from "./reason/Reason";
import Integration from "./banners/Integration";
import Customer from "./customer/Customer";

function App() {
  return (
    <>
      <NavbarTop />
      <Hero />
      <Feature />
      <YoutubePage />
      <Reason />
      <Integration />
      <Customer />
      <Testimonials />
      <MidBanner />
      <Accordion />
      <BottomBanner />
      <Footer />
    </>
  );
}

export default App;
