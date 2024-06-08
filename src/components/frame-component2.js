import PropTypes from "prop-types";
import "./frame-component2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`img-group ${className}`}>
      <img className="img-icon2" loading="lazy" alt="" src="/img@2x.png" />
      <div className="frame-wrapper2">
        <div className="frame-parent11">
          <div className="frame-wrapper3">
            <div className="value-group">
              <div className="value2">VALUE</div>
              <h1 className="why-ai-certs5">Why AI CERTs?</h1>
            </div>
          </div>
          <div className="frame-parent12">
            <div className="dash-group">
              <img
                className="dash-icon2"
                loading="lazy"
                alt=""
                src="/dash.svg"
              />
              <div className="social-impact-and-global-visio-container">
                <div className="social-impact-and2">
                  Social Impact and Global Vision
                </div>
              </div>
            </div>
            <div className="ai-certs-aims-to-certify-and-wrapper">
              <p className="ai-certs-aims3">
                AI Certs™ aims to certify and train a billion people, leveraging
                education to create a better world. We pledge 10% of our yearly
                profits to construct schools for underprivileged children,
                embodying our commitment to societal betterment through
                education.
              </p>
            </div>
          </div>
          <div className="frame-parent13">
            <div className="frame-parent14">
              <div className="line-wrapper">
                <div className="frame-child9" />
              </div>
              <div className="plus-parent4">
                <img
                  className="plus-icon12"
                  loading="lazy"
                  alt=""
                  src="/plus.svg"
                />
                <div className="comprehensive-ai-certification-wrapper">
                  <div className="comprehensive-ai-certification2">
                    Comprehensive AI Certification™ Portfolio
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent15">
              <div className="line-container">
                <div className="frame-child10" />
              </div>
              <div className="plus-parent5">
                <img
                  className="plus-icon13"
                  loading="lazy"
                  alt=""
                  src="/plus.svg"
                />
                <div className="pioneering-in-ai-and-blockchai-container">
                  <div className="pioneering-in-ai2">
                    Pioneering in AI and Blockchain Convergence
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent16">
              <div className="line-frame">
                <div className="frame-child11" />
              </div>
              <div className="plus-parent6">
                <img
                  className="plus-icon14"
                  loading="lazy"
                  alt=""
                  src="/plus.svg"
                />
                <div className="innovative-certification-testi-container">
                  <div className="innovative-certification-testi2">
                    Innovative Certification Testing
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent17">
              <div className="line-wrapper1">
                <div className="frame-child12" />
              </div>
              <div className="plus-parent7">
                <img
                  className="plus-icon15"
                  loading="lazy"
                  alt=""
                  src="/plus.svg"
                />
                <div className="expertise-driven-team-container">
                  <b className="expertise-driven-team2">
                    Expertise-Driven Team
                  </b>
                </div>
              </div>
            </div>
            <div className="frame-parent18">
              <div className="line-wrapper2">
                <div className="frame-child13" />
              </div>
              <div className="plus-parent8">
                <img
                  className="plus-icon16"
                  loading="lazy"
                  alt=""
                  src="/plus.svg"
                />
                <div className="extensive-network-of-subject-m-container">
                  <div className="extensive-network-of2">
                    Extensive Network of Subject Matter Experts
                  </div>
                </div>
              </div>
            </div>
            <div className="line-wrapper3">
              <div className="frame-child14" />
            </div>
            <div className="plus-parent9">
              <img
                className="plus-icon17"
                loading="lazy"
                alt=""
                src="/plus.svg"
              />
              <div className="industry-recognition-and-valid-wrapper">
                <div className="industry-recognition-and2">
                  Industry Recognition and Validation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
