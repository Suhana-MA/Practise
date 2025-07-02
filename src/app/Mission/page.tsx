import Header from "../../components/Header/header";
import Footer from "../../components/Footer/Footer";
import Cities from "../../components/Cities/Cities";
import ServiceExpertSectionWithProvider from "../../components/ServiceExpert/ServiceExpertSection";
import Banner from "../../components/common/Banner";
import MissionPage from "../../components/Mission/Mission";

export default function HeaderPreviewPage() {
  return (
    <>
      <Header />
      <Banner />
      <MissionPage />
      <ServiceExpertSectionWithProvider />
      <Cities />
      <Footer />
      
      
      
    </>
  );
}
 