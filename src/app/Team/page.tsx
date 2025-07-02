import Header from "../../components/Header/header";
import Footer from "../../components/Footer/Footer";
import Cities from "../../components/Cities/Cities";
import ServiceExpertSectionWithProvider from "../../components/ServiceExpert/ServiceExpertSection";
import TeamPage from "../../components/Team/TeamPage";
import Banner from "../../components/common/Banner";


export default function HeaderPreviewPage() {
  return (
    <>
      <Header />
      <Banner />
      <TeamPage />
      <ServiceExpertSectionWithProvider />
      <Cities />
      <Footer />
      
      
      
    </>
  );
}
 