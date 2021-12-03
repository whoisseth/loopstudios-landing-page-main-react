import "./MainSection.scss";
import Media from "react-media";
import IntractiveSection from "../intractiveSection/IntractiveSection";
import CreationSection from "../creationsSection/CreationSection";
import GallarySection from "../gallarySection/GallarySection";
import BtnSeeAll from "../btnSeeAll/BtnSeeAll";

function MainSection() {
  return (
    <div>
      <div className="mainSection">
        <IntractiveSection />
        <CreationSection />
        <GallarySection />
        <Media queries={{ MediumScreen: "(max-width: 875px)" }}>
          {(matches) => (matches.MediumScreen ? <BtnSeeAll /> : <div></div>)}
        </Media>
      </div>
    </div>
  );
}

export default MainSection;
