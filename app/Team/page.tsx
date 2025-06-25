"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import ServiceExpertSection from "../components/ServiceExpertSection"; 
import Team from "./Team";



export default function Home() {
  return (
    <>

      
      <Header />
      
        <section> 
        <img
          src="joboyimages/inner-banner.jpg"
          className="img-fluid"
          alt="Joboy Inner Banner"
        />
        
      </section>

      <Team />
    
      <ServiceExpertSection />
      <Footer />
    </>
  );
};