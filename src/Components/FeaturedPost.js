import "../Styles/featurepost.css";
import FeatureArrayData from "../data";

const FeaturedPost = () => {
  return (
    <>
      <h3 className="featured-tagline">Featured Posts</h3>
      <div className="featured-card">
        {FeatureArrayData.map((arraydata) => (
          <div className="featured-structure">
            <div>
              <img
                src={arraydata.img}
                alt="Loading"
                className="feature-img"
              ></img>
              <div className="featured-content-wrapper">
                <div className="feature-title">{arraydata.title}</div>
                <div className="feature-desc">{arraydata.desc}</div>
                {/* <div className = "feature-category">{arraydata.category}</div> */}
                <div className="feature-author">{arraydata.author}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedPost;
