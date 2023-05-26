import { FC } from "react";

import SwiperComponent from "../swiper/SwiperComponent";

import { projectsTab, projectsWeb } from "../../core/constants/constants";

import "./ourProjects.scss";
import { useWindowSize } from "../../hooks/hooks";

const OurProjects: FC = () => {
  const [width] = useWindowSize();
  return (
    <section className="our-projects">
       {/* {width < 1200 ? <h2>Наши Проекты</h2> : null} */}
       {width < 1200 && (
        <div className="our-projects-label">
          <h4>ПРОЕКТЫ</h4>
        </div>
      )}

      <SwiperComponent items={width > 1200 ? projectsWeb : projectsTab} />
    </section>
  );
};

export default OurProjects;
