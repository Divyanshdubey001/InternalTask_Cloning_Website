import "../Styles/category.css";
const Category = () => {
  return (
    <>
      <div className="category-container">
        <div className="category-wrapper">
          <a href="nature" className="category-link">
            Nature
          </a>

          <a href="photography" className="category-link">
            Photography
          </a>

          <a href="relaxation" className="category-link">
            Relaxation
          </a>

          <a href="vacation" className="category-link">
            Vacation
          </a>

          <a href="travel" className="category-link">
            Travel
          </a>

          <a href="adventure" className="category-link">
            Adventure
          </a>
        </div>
      </div>
    </>
  );
};

export default Category;
