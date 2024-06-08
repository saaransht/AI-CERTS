import VideoHeaderBanner from "../components/video-header-banner2";
import FrameComponent from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component11";
import "./homepage2.css";

const Homepage = () => {
  return (
    <div className="homepage2">
      <div className="full-bg1" />
      <div className="homepage-item" />
      <img className="object-icon1" loading="lazy" alt="" src="/object.svg" />
      <section className="image-slider-wrapper">
        <div className="image-slider1">
          <VideoHeaderBanner />
          <div className="banner-21">
            <div className="group">
              <img className="icon1" alt="" src="/331929-1@2x.png" />
              <div className="black-overly3" />
              <img className="image-31-icon1" alt="" src="/image-31@2x.png" />
              <img className="image-33-icon1" alt="" src="/image-33@2x.png" />
            </div>
            <div className="text3">
              <div className="rectangle-div" />
              <b className="expand-your-horizons-container1">
                <p className="expand1">Expand</p>
                <p className="your-horizons1">Your Horizons</p>
              </b>
              <div className="master-ai-and1">
                MASTER AI AND BLOCKCHAIN WITH AI CERTS
              </div>
            </div>
            <img className="dots-icon3" alt="" src="/dots1.svg" />
          </div>
          <div className="banner-31">
            <img className="banner-3-item" alt="" src="/frame-9@2x.png" />
            <div className="black-overly4" />
            <div className="text4">
              <div className="text-child1" />
              <b className="work-smarter-container1">
                <p className="work-smarter1">Work Smarter ,</p>
                <p className="not-harder1">Not Harder</p>
              </b>
              <div className="by-unleashing-the1">
                BY UNLEASHING THE POWER OF AI AND BLOCKCHAIN
              </div>
            </div>
            <img className="dots-icon4" alt="" src="/dots.svg" />
          </div>
          <div className="banner-41">
            <img className="banner-4-item" alt="" src="/frame-9@2x.png" />
            <div className="black-overly5" />
            <div className="text5">
              <div className="text-child2" />
              <b className="from-data-to-container1">
                <p className="from-data1">From Data</p>
                <p className="to-decisions1">to Decisions</p>
              </b>
              <div className="ai-certs-is1">
                AI CERTS IS LEADING THE CHARGE IN BUSINESS EVOLUTION
              </div>
            </div>
            <img className="dots-icon5" alt="" src="/dots2.svg" />
          </div>
        </div>
      </section>
      <FrameComponent3 />
      <section className="frame-section">
        <div className="frame-group">
          <div className="what-we-do-container">
            <div className="what-we-do3">WHAT WE DO</div>
          </div>
          <div className="at-ai-certs-container2">
            <p className="at-ai-certs-our-mission-is-t2">
              <b>{`At AI Certs™, our mission is to certify `}</b>
            </p>
            <p className="and-empower-1-billion-individu2">
              <b>{`and empower 1 billion individuals with premier `}</b>
            </p>
            <p className="ai-and-blockchain-certificatio2">
              <b>{`AI and Blockchain certifications. `}</b>
            </p>
            <p className="blank-line4">
              <b>
                <span className="blank-line5">&nbsp;</span>
              </b>
            </p>
            <p className="join-us-in2">
              Join us in our mission to shape the AI and Blockchain industry!
            </p>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default Homepage;
