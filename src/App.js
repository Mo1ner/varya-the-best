import React, { useRef } from "react";
import "./App.css";
import Cons from "./comp/cons/Cons";
import Footer from "./comp/footer/Footer";
import Hero from "./comp/hero/Hero";
import Navbar from "./comp/navbar/Navbar";
import Pros from "./comp/pros/Pros";

function App() {
  const heroRef = useRef(null);
  const prosRef = useRef(null);
  const consRef = useRef(null);

  const scrollToSection = (section, event) => {
    event.preventDefault(); // Останавливаем стандартный переход

    const refs = {
      hero: heroRef,
      pros: prosRef,
      cons: consRef,
    };

    window.scrollTo({
      top: refs[section].current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Hero ref={heroRef} />
      <Pros ref={prosRef} />
      <Cons ref={consRef} />
      <Footer />
    </>
  );
}

export default App;
