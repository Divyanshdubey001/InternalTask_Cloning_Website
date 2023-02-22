import { ArrayStructure } from "../data";
import "../Styles/recentpost.css";

const RecentPost = () => {
  return (
    <>
      <h3 className="tagline">Most Recent</h3>
      <div className="card-container">
        {ArrayStructure.map((arraystructure) => (
          <div className="card">
            <div className="imgs">
              <img
                src={arraystructure.img}
                alt="img"
                className="recent-img"
              ></img>
              <div className="title">{arraystructure.title}</div>
              <div className="desc">{arraystructure.desc}</div>
              <div className="category">{arraystructure.category}</div>
              <div className="author">{arraystructure.author}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentPost;
