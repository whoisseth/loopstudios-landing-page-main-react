import "./GallarySection.scss";

function GallarySection() {
  const gallaryObj = [
    {
      id: 1,
      ImageAddress: "/images/desktop/image-deep-earth.jpg",
      ImageName: "DEEP EARTH",
    },
    {
      id: 2,
      ImageAddress: "/images/desktop/image-night-arcade.jpg",
      ImageName: "NIGHT ARCADE",
    },
    {
      id: 3,
      ImageAddress: "/images/desktop/image-soccer-team.jpg",
      ImageName: "SOCCER TEAM VR",
    },
    {
      id: 4,
      ImageAddress: "/images/desktop/image-grid.jpg",
      ImageName: " THE GRID",
    },
    {
      id: 5,
      ImageAddress: "/images/desktop/image-from-above.jpg",
      ImageName: "FROM UP ABOVE VR ",
    },
    {
      id: 6,
      ImageAddress: "/images/desktop/image-pocket-borealis.jpg",
      ImageName: "POCKET BOREALIS",
    },
    {
      id: 7,
      ImageAddress: "/images/desktop/image-curiosity.jpg",
      ImageName: "THE CURIOSITY ",
    },
    {
      id: 8,
      ImageAddress: "/images/desktop/image-fisheye.jpg",
      ImageName: "MAKE IT FISHEYE ",
    },
  ];

  return (
    <div>
      <div className="GallarySection">
        {gallaryObj.map((gallary) => (
          <div className="cart" key={gallaryObj.id}>
            <img src={gallary.ImageAddress} alt="" />
            <div className="title">{gallary.ImageName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GallarySection;
