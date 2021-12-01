import "./intractiveSection.scss";
import IntractiveImg from "./../../images/desktop/image-interactive.jpg";

function intractiveSection() {
  return (
    <div className="intractiveSection">
      <div className="intractiveSection-img-container">
        <img
          src={IntractiveImg}
          className="intractiveSection-img"
          alt="Man wearing VR"
        />
        {/* Intractive-Section-Text */}
        <div className="intractiveSection-text">
          <div className="h2"> THE LEADER IN INTERACTIVE VR </div>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default intractiveSection;
