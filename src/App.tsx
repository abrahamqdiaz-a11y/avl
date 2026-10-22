import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import ServiceArea from "./components/ServiceArea";
import BookingBand from "./components/BookingBand";
import Footer from "./components/Footer";

export default function App() {
  return (
    // LazyMotion loads only the animation features we use; reduced-motion
    // preferences are respected by skipping transform animations.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Services />
          <HowItWorks />
          <About />
          <ServiceArea />
          <BookingBand />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
