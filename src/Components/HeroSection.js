import "../Styles/herosection.css";

const HeroSection = () => {
  return (
    <>
      <div className="background-setter">
        <div>
          <div className="initial-title">
            <h3> Let's do it together.</h3>
          </div>
          <div className="sub-title-desc">
            <h3>
              We travel the World in search of stories. Come along for the ride.
            </h3>
          </div>
          <div className="button-desc">
            <a href="Latest Post" className="latest-post">
              View Latest Posts
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
