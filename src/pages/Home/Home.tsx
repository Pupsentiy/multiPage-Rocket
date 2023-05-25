import ContactUs from "../../components/contactUs/ContactUs";
import Intro from "../../components/intro/Intro";
import OurAdvantage from "../../components/ourAdvantage/OurAdvantage";
import OurMission from "../../components/ourMission/OurMission";
import Service from "../../components/service/Service";

const Home = () => {
  return (
    <>
      <Intro />
      <OurMission />
      <OurAdvantage />
      <Service />
      <ContactUs />
    </>
  );
};

export default Home;
