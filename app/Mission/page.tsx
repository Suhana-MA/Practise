"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import ServiceExpertSection from "../components/ServiceExpertSection"; 
import MissionPage from "./Mission";
import Cities from "../components/Cities";


export default function Home() {
  return (
    <>

      
      <Header />
      
        

      <MissionPage />
      <Cities />
    
      <ServiceExpertSection />
      <Footer />
    </>
  );
};