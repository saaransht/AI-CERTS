import PropTypes from "prop-types";
import "./frame-component3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`homepage-inner1 ${className}`}>
      <div className="slider-button-group">
        <div className="slider-button1">
          <div className="button2">
            <b className="get-certified4">AI+ Executive™</b>
          </div>
        </div>
        <div className="slider-button2">
          <div className="button3">
            <b className="get-certified5">AI+ Developer™</b>
          </div>
        </div>
        <div className="slider-button3">
          <div className="button4">
            <b className="get-certified6">AI+ Ethics™</b>
          </div>
        </div>
        <div className="slider-button4">
          <div className="button5">
            <b className="get-certified7">AI+ Data™</b>
          </div>
        </div>
        <div className="slider-button5">
          <div className="button6">
            <div className="get-certified8">AI+ Prompt Engineer™</div>
          </div>
        </div>
        <div className="slider-button6">
          <div className="button7">
            <div className="get-certified9">AI+ Prompt Engineer™</div>
          </div>
        </div>
        <button className="slider-button7">
          <div className="button8">
            <b className="get-certified10">AI+ Sales™</b>
          </div>
        </button>
        <div className="slider-button8">
          <div className="button9">
            <b className="get-certified11">AI+ Marketing™</b>
          </div>
        </div>
        <div className="slider-button9">
          <div className="button10">
            <b className="get-certified12">Bitcoin+ Executive™</b>
          </div>
        </div>
        <div className="slider-button10">
          <div className="button11">
            <b className="get-certified13">Bitcoin+ Developer™</b>
          </div>
        </div>
        <div className="slider-button11">
          <div className="button12">
            <b className="get-certified14">Blockchain+ Developer™</b>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
