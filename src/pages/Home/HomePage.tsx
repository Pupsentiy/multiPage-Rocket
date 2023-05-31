import Answers from "../../components/answers/Answers";
import ContactUs from "../../components/contactUs/ContactUs";
import Contacts from "../../components/contacts/Contacts";
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
      <Contacts />
      <Answers />
    </>
  );
};

export default Home;
