import "../Styles/footersection.css";

const FooterSection = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-desc">
          <h2>
            <u>Stay in Touch</u>
          </h2>
        </div>
        <div className="submit-container">
          <input
            type="email"
            className="input-text"
            placeholder="Enter your email address"
            required
          ></input>
          <button type="submit">Submit</button>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
