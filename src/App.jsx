import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import SolutionsSection from "./components/Solutions";
import CSR from "./components/CSR";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Process />
      <SolutionsSection />
      <CSR />
      <Footer />
    </>
  );
}
