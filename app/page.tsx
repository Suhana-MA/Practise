"use client";

import Image from "next/image";
import styles from "../page.module.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import ServiceExpertSection from "./components/ServiceExpertSection"; 
import Hero from "./Home/Hero";
import Cities from "./components/Cities";
import Feature from "./Home/Feature";
import Content from "./Home/Content";




export default function Home() {
  return (
    <>

      
      <Header />
      <Hero />
      <Feature />
        <Content />
        
       
      <Cities />
      
      
    
      <ServiceExpertSection />
      <Footer />
    </>
  );
};