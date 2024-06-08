import PropTypes from "prop-types";
import "./frame-component11.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`professional-certifications-parent ${className}`}>
      <div className="professional-certifications4">
        <img
          className="medium-shot-colleagues-back-of-icon2"
          alt=""
          src="/mediumshotcolleaguesbackoffice-1@2x.png"
        />
        <div className="professional-certifications-group">
          <h1 className="professional-certifications5">
            Professional Certifications
          </h1>
          <p className="learn-how-certification4">
            Learn how Certification can Transform Every Department of your
            Organization
          </p>
        </div>
        <button className="primary-buttton1">
          <b className="get-certified15">Explore More</b>
        </button>
      </div>
      <div className="technical-certifications4">
        <img
          className="medium-shot-people-working-wit-icon2"
          alt=""
          src="/mediumshotpeopleworkingwithdevices-1@2x.png"
        />
        <img
          className="portrait-female-it-developer-l-icon2"
          loading="lazy"
          alt=""
          src="/portraitfemaleitdeveloperlookingcamerawhileposingagainstcomputerwithcodescreensoftwareproductionstudiocopyspace-1@2x.png"
        />
        <div className="technical-certifications-group">
          <h1 className="technical-certifications5">
            Technical Certifications
          </h1>
          <p className="learn-how-certification5">
            Learn how Certification can Transform your IT Department
          </p>
        </div>
        <button className="primary-buttton2">
          <b className="get-certified16">Explore More</b>
        </button>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
