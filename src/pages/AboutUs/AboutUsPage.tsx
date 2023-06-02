import AboutUs from "../../components/section/aboutUs/AboutUs";
import ContactUs from "../../components/section/contactUs/ContactUs";
import OurProfile from "../../components/section/ourProfile/OurProfile";
import OurProjects from "../../components/section/ourProjects.tsx/OurProjects";
import Reviews from "../../components/section/reviews/Reviews";

const AboutUsPage = () => {
  return (
    <>
      <AboutUs />
      <OurProfile />
      <Reviews />
      <ContactUs />
      <OurProjects />
    </>
  );
};

export default AboutUsPage;
