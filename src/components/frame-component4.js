import PropTypes from "prop-types";
import "./frame-component4.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer className={`frame-footer ${className}`}>
      <div className="frame-parent19">
        <div className="frame-parent20">
          <div className="frame-parent21">
            <div className="logo-frame">
              <div className="logo2">
                <img
                  className="group-icon4"
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
                <div className="group-container">
                  <img
                    className="group-icon5"
                    loading="lazy"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="newsletter-signup-parent">
              <b className="newsletter-signup3">Newsletter Signup</b>
              <div className="input2">
                <div className="envelope-1-container">
                  <img
                    className="envelope-1-icon2"
                    alt=""
                    src="/envelope-1.svg"
                  />
                </div>
                <input
                  className="input-item"
                  placeholder="Enter Your Email Address"
                  type="text"
                />
                <img
                  className="arrow-right-1-icon2"
                  alt=""
                  src="/arrowright-1.svg"
                />
              </div>
            </div>
            <div className="facebook-svgrepo-com-parent">
              <img
                className="facebook-svgrepo-com-icon2"
                loading="lazy"
                alt=""
                src="/facebooksvgrepocom.svg"
              />
              <img
                className="youtube-168-svgrepo-com-1-icon2"
                loading="lazy"
                alt=""
                src="/youtube168svgrepocom-1.svg"
              />
              <img
                className="instagram-svgrepo-com-1-icon2"
                loading="lazy"
                alt=""
                src="/instagramsvgrepocom-1.svg"
              />
              <img
                className="linkedin-svgrepo-com-1-icon2"
                loading="lazy"
                alt=""
                src="/linkedinsvgrepocom-1.svg"
              />
              <img
                className="twitter-x-1-icon2"
                loading="lazy"
                alt=""
                src="/twitterx-1.svg"
              />
            </div>
          </div>
          <div className="frame-parent22">
            <div className="about-group">
              <b className="about3">About</b>
              <p className="why-ai-certs-container2">
                <span className="why-ai-certs6">Why AI Certs</span>
                <span className="accreditation2">Accreditation</span>
                <span className="meet-our-team2">Meet Our Team</span>
                <span className="trademarks2">Trademarks</span>
                <span className="articles2">Articles</span>
                <span className="press-release2">Press Release</span>
                <span className="testimonials2">Testimonials</span>
                <span className="career2">Career</span>
                <span className="contact2">Contact</span>
              </p>
            </div>
            <div className="frame-parent23">
              <div className="certifications-group">
                <b className="certifications4">Certifications</b>
                <p className="ai-professional-ai-container2">
                  <span className="ai-professional2">AI+ Professional™</span>
                  <span className="ai-technical2">AI+ Technical™</span>
                  <span className="blockchain-professional2">
                    Blockchain+ Professional™
                  </span>
                  <span className="blockchain-technical2">
                    Blockchain+ Technical™
                  </span>
                  <span className="view-all2">View All</span>
                </p>
              </div>
              <div className="authorized-group">
                <b className="authorized3">Authorized</b>
                <div className="authorized-partners-authorized-container2">
                  <p className="authorized-partners2">Authorized Partners</p>
                  <p className="authorized-trainers2">Authorized Trainers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-parent">
          <img className="line-icon" alt="" />
          <div className="copyright-ai2">
            Copyright © AI CERTs™, Inc. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
