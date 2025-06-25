"use client";

import Image from "next/image";
import styles from "../page.module.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import ServiceExpertSection from "../components/ServiceExpertSection"; 
import Hero from "./Hero";
import Cities from "../components/Cities";
import Feature from "./Feature";
import Content from "./Content";
import NewsAndTestimonials from "./news";




export default function Home() {
  return (
    <>

      
      <Header />
      <Hero />
      <Feature />
        <Content />
        <NewsAndTestimonials />
        
       
      <Cities />
      
      
    
      <ServiceExpertSection />
      <Footer />
    </>
  );
};