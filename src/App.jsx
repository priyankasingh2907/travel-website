import styled from "styled-components";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Recommend from "./Components/Recommend";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import scrollreveal from "scrollreveal";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0.8,
        interval: 300,
      }
    );
  }, []);
  return (
    <Main>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </Main>
  );
}
const Main = styled.main``;
