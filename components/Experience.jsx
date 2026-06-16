"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import SmoothScroll from "./SmoothScroll";
import Preloader from "./Preloader";
import Cursor from "./Cursor";
import Nav from "./Nav";
import Hero from "./Hero";
import Services from "./Services";
import Thesis from "./Thesis";
import Why from "./Why";
import Industries from "./Industries";
import Stats from "./Stats";
import Contact from "./Contact";
import Footer from "./Footer";

const Universe = dynamic(() => import("./Universe"), { ssr: false });

export default function Experience() {
  const [loaded, setLoaded] = useState(false);
  return (
    <SmoothScroll>
      <Universe />
      <Cursor />
      <AnimatePresence>{!loaded && <Preloader key="pre" onDone={() => setLoaded(true)} />}</AnimatePresence>
      <Nav ready={loaded} />
      <main id="main" style={{ position: "relative", zIndex: 1 }}>
        <Hero ready={loaded} />
        <Services />
        <Thesis />
        <Why />
        <Industries />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
