import PropTypes from "prop-types";
import "./video-header-banner2.css";

const VideoHeaderBanner = ({ className = "" }) => {
  return (
    <div className={`video-header-banner-12 ${className}`}>
      
     
      <div className="sequence-03-1-12" />
      <div className="black-overly11">
        <div className="black-overly-inner" />
        <header className="frame-header">
          <div className="frame-parent8">
            <div className="logo-container">
              <img
                className="logo-icon1"
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
            </div>
            <nav className="navigation2">
              <div className="link14">
                <a className="home14">Home</a>
              </div>
              <div className="link15">
                <a className="home15">About</a>
              </div>
              <div className="link16">
                <a className="home16">Certification</a>
              </div>
              <div className="link17">
                <a className="home17">Authorized Partners</a>
              </div>
              <div className="link18">
                <a className="home18">Authorized Trainers</a>
              </div>
              <div className="link19">
                <a className="home19">Resources</a>
              </div>
              <div className="link20">
                <a className="home20">Contact</a>
              </div>
            </nav>
          </div>
          <div className="primary-buttton-container">
            <button className="primary-buttton">
              <a className="get-certified3">Get Certified</a>
            </button>
          </div>
        </header>
        <div className="frame-parent9">
          <div className="frame-wrapper1">
            <div className="frame-parent10">
              <div className="rectangle-group">
                <div className="frame-child8" />
                <h1 className="lead-businesses-into-container2">
                  <p className="lead-businesses2">{`Lead Businesses `}</p>
                  <p className="into-future2">into Future</p>
                </h1>
              </div>
              <div className="by-harnessing-cutting-edge2">
                BY HARNESSING CUTTING-EDGE AI AND BLOCKCHAIN KNOWLEDGE
              </div>
            </div>
          </div>
          <img className="dots-icon8" loading="lazy" alt="" src="/dots.svg" />
        </div>
      </div>
    </div>
  );
};

VideoHeaderBanner.propTypes = {
  className: PropTypes.string,
};

export default VideoHeaderBanner;
