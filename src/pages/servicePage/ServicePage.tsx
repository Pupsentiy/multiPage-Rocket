import OurProjectsSwiper from "../../components/section/OurProjectsSwiper/OurProjectsSwiper";
import Answers from "../../components/section/answers/Answers";
import Contacts from "../../components/section/contacts/Contacts";
import DevStages from "../../components/section/devStages/DevStages";
import Price from "../../components/section/price/Price";
import Service from "../../components/section/service/Service";

const ServicePage = () => {
  return (
    <>
      <Service />
      <DevStages />
      <OurProjectsSwiper />
      <Price />
      <Contacts />
      <Answers />
    </>
  );
};

export default ServicePage;
