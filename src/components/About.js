import "./About.scss";
import brand1 from "../assets/brand-1.png";
import brand2 from "../assets/brand-2.png";
import brand3 from "../assets/brand-3.png";
import brand4 from "../assets/brand-4.png";
import brand5 from "../assets/brand-5.png";

import shape1 from "../assets/services-shape-1.svg";
import shape2 from "../assets/services-shape-2.svg";
import shape3 from "../assets/services-shape-3.svg";
const About = () => {
  return (
    <section className="about-section">
      <div className="brand-container">
        <div className="brands">
          <img className="brand" src={brand1} />
        </div>
        <div className="brands">
          <img className="brand" src={brand2} />
        </div>
        <div className="brands">
          <img className="brand" src={brand3} />
        </div>
        <div className="brands">
          <img className="brand" src={brand4} />
        </div>
        <div className="brands">
          <img className="brand" src={brand5} />
        </div>
      </div>

      <div className="text-container">
        <p className="about-text">
          <span className="about-primary"> Clean and simple design,</span>{" "}
          <span className="about-secondary">
            Comes with everything you need to get started!
          </span>
        </p>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-list">
            <img className="card-img" src={shape1} />
          </div>
          <div className="card-list">
            <h3 className="card-title">Clean</h3>
          </div>
          <div className="card-list">
            <p className="card-desc">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam
              nonu eirmod tempor invidunt labore.
            </p>
          </div>
          <div className="card-list">
            <a className="card-link" href="#">
              Learn More
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-list">
            <img className="card-img" src={shape2} />
          </div>
          <div className="card-list">
            <h3 className="card-title">Clean</h3>
          </div>
          <div className="card-list">
            <p className="card-desc">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam
              nonu eirmod tempor invidunt labore.
            </p>
          </div>
          <div className="card-list">
            <a className="card-link" href="#">
              Learn More
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-list">
            <img className="card-img" src={shape3} />
          </div>
          <div className="card-list">
            <h3 className="card-title">Clean</h3>
          </div>
          <div className="card-list">
            <p className="card-desc">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam
              nonu eirmod tempor invidunt labore.
            </p>
          </div>
          <div className="card-list">
            <a className="card-link" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
