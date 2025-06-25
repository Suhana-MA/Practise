"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import ServiceExpertSection from "../components/ServiceExpertSection"; 
import MissionPage from "./Contact";
import Cities from "../components/Cities";
import ContactPage from "./Contact";


export default function Home() {
  return (
    <>

      
      <Header />
      
        

      <ContactPage />   
      <Cities />
    
      <ServiceExpertSection />
      <Footer />
    </>
  );
};