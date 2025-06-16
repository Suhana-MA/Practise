"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Team from "./components/Team";
import ServiceExpertSection from "./components/ServiceExpertSection"; 

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <img src="joboyimages/inner-banner.jpg" className="img-fluid" alt="" />
      </section>
      <Team />
      <ServiceExpertSection />
      <Footer />
    </>
  );
};