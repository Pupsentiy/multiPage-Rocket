import ContactUs from "../../components/contactUs/ContactUs";
import DevStages from "../../components/devStages/DevStages";
import Intro from "../../components/intro/Intro";
import OurAdvantage from "../../components/ourAdvantage/OurAdvantage";
import OurMission from "../../components/ourMission/OurMission";
import OurProjects from "../../components/ourProjects.tsx/OurProjects";
import Reviews from "../../components/reviews/Reviews";
import Service from "../../components/service/Service";

const Home = () => {
  return (
    <>
      <Intro />
      <OurMission />
      <OurAdvantage />
      <Service />
      <ContactUs />
      <DevStages />
      <OurProjects />
      <Reviews />
    </>
  );
};

export default Home;
