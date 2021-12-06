import "./GallarySection.scss";
import Media from "react-media";
const gallaryObj = [
  {
    id: 1,
    ImageAddress: "/images/desktop/image-deep-earth.jpg",
    ImageAddressMobile: "/images/mobile/image-deep-earth.jpg",
    ImageName: "DEEP EARTH",
  },
  {
    id: 2,
    ImageAddress: "/images/desktop/image-night-arcade.jpg",
    ImageAddressMobile: "/images/mobile/image-night-arcade.jpg",
    ImageName: "NIGHT ARCADE",
  },
  {
    id: 3,
    ImageAddress: "/images/desktop/image-soccer-team.jpg",
    ImageAddressMobile: "/images/mobile/image-soccer-team.jpg",
    ImageName: "SOCCER TEAM VR",
  },
  {
    id: 4,
    ImageAddress: "/images/desktop/image-grid.jpg",
    ImageAddressMobile: "/images/mobile/image-grid.jpg",
    ImageName: " THE GRID",
  },
  {
    id: 5,
    ImageAddress: "/images/desktop/image-from-above.jpg",
    ImageAddressMobile: "/images/mobile/image-from-above.jpg",
    ImageName: "FROM UP ABOVE VR ",
  },
  {
    id: 6,
    ImageAddress: "/images/desktop/image-pocket-borealis.jpg",
    ImageAddressMobile: "/images/mobile/image-pocket-borealis.jpg",
    ImageName: "POCKET BOREALIS",
  },
  {
    id: 7,
    ImageAddress: "/images/desktop/image-curiosity.jpg",
    ImageAddressMobile: "/images/mobile/image-curiosity.jpg",
    ImageName: "THE CURIOSITY ",
  },
  {
    id: 8,
    ImageAddress: "/images/desktop/image-fisheye.jpg",
    ImageAddressMobile: "/images/mobile/image-fisheye.jpg",
    ImageName: "MAKE IT FISHEYE ",
  },
];
function Desktop() {
  return (
    <div>
      <div className="GallarySection">
        {gallaryObj.map((gallary) => (
          <div key={gallary.id}>
            <div className="cart" key={gallaryObj.id}>
              <img src={gallary.ImageAddress} alt={`${gallary.ImageName}`} />
              <div className="title">{gallary.ImageName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
//
function Mobile() {
  return (
    <div>
      <div className="GallarySection">
        {gallaryObj.map((gallary) => (
          <div key={gallary.id}>
            <div className="cart" key={gallaryObj.id}>
              <img
                src={gallary.ImageAddressMobile}
                alt={`${gallary.ImageName}`}
              />
              <div className="title">{gallary.ImageName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function GallarySection() {
  return (
    <div>
      <Media queries={{ small: "(max-width: 1240px)" }}>
        {(matches) => (matches.small ? <Mobile /> : <Desktop />)}
      </Media>
    </div>
  );
}

export default GallarySection;
