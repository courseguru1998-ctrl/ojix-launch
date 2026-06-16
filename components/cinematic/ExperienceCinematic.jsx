"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SmoothScroll from "../SmoothScroll";
import PreloaderCinematic from "./PreloaderCinematic";
import Cursor from "../Cursor";
import NavCinematic from "./NavCinematic";
import HeroCinematic from "./HeroCinematic";
import ServicesCinematic from "./ServicesCinematic";
import ThesisCinematic from "./ThesisCinematic";
import WhyCinematic from "./WhyCinematic";
import IndustriesCinematic from "./IndustriesCinematic";
import StatsCinematic from "./StatsCinematic";
import ContactCinematic from "./ContactCinematic";
import FooterCinematic from "./FooterCinematic";

export default function ExperienceCinematic() {
  const [loaded, setLoaded] = useState(false);
  return (
    <SmoothScroll>
      <div className="grain" aria-hidden />
      <div className="scanlines" aria-hidden />
      <div className="vignette" aria-hidden />
      <Cursor />
      <AnimatePresence>{!loaded && <PreloaderCinematic key="pre" onDone={() => setLoaded(true)} />}</AnimatePresence>
      <NavCinematic ready={loaded} />
      <main id="main" style={{ position: "relative", zIndex: 1 }}>
        <HeroCinematic ready={loaded} />
        <ServicesCinematic />
        <ThesisCinematic />
        <WhyCinematic />
        <IndustriesCinematic />
        <StatsCinematic />
        <ContactCinematic />
      </main>
      <FooterCinematic />
    </SmoothScroll>
  );
}
