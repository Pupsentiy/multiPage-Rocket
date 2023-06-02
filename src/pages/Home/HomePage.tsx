import Answers from "../../components/section/answers/Answers";
import ContactUs from "../../components/section/contactUs/ContactUs";
import Contacts from "../../components/section/contacts/Contacts";
import DevStages from "../../components/section/devStages/DevStages";
import Intro from "../../components/section/intro/Intro";
import OurAdvantage from "../../components/section/ourAdvantage/OurAdvantage";
import OurMission from "../../components/section/ourMission/OurMission";
import OurProjects from "../../components/section/ourProjects.tsx/OurProjects";
import Reviews from "../../components/section/reviews/Reviews";
import Service from "../../components/section/service/Service";

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
