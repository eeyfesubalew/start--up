import "./About-section.scss";
import aboutimg1 from "../assets/about1.svg";
import aboutimg2 from "../assets/about2.svg";
import aboutimg3 from "../assets/about3.svg";
const AboutSection = () => {
  return (
    <section className="about-sec">
      <div className="ab-sec-container">
        <div className="ab-sec ab-sec-one">
          <h3 className="ab-title">
            <span className="ab-title-big">Quick & Easy</span>{" "}
            <span className="ab-title-small">to Use Bootstrap Template</span>
          </h3>
          <p className="ab-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing.
          </p>
          <a className="ab-btn" href="#">
            Try It Free
          </a>
        </div>
        <div className="ab-sec">
          <img src={aboutimg1} className="ab-img" />
        </div>
      </div>

      <div className="ab-sec-container">
        <div className="ab-sec">
          <img src={aboutimg2} className="ab-img" />
        </div>
        <div className="ab-sec ab-sec-one ab-sec-one-right">
          <h3 className="ab-title">
            <span className="ab-title-big">Modern design</span>
            <span className="ab-title-small">with Essential Features</span>
          </h3>
          <p className="ab-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing.
          </p>
          <a className="ab-btn" href="#">
            Try It Free
          </a>
        </div>
      </div>

      <div className="ab-sec-container">
        <div className="ab-sec ab-sec-one">
          <h3 className="ab-title">
            <span className="ab-title-big">Crafted for</span>
            <span className="ab-title-small">
              SaaS, App and Software Landing Page
            </span>
          </h3>
          <p className="ab-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing.
          </p>
          <a className="ab-btn" href="#">
            Try It Free
          </a>
        </div>
        <div className="ab-sec">
          <img src={aboutimg3} className="ab-img" />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
