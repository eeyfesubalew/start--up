import "./Testemonial.scss";
import author1 from "../assets/author-1.png";
import author2 from "../assets/author-2.png";
import author3 from "../assets/author-3.png";
import star from "../assets/star.svg";
import quotes from "../assets/quotes.svg";

const Testemonial = () => {
  return (
    <section className="testemonial-section">
      <div className="team-title-container">
        <h3 className="team-title">
          <span className="team-title-big">Users sharing </span>
          <span className="team-title-small">their experience</span>
        </h3>
      </div>

      <div className="card-container">
        <div className=" card-test-testemonial">
          <div className="card-list-test">
            {/* <img className="card-img" src={shape1} /> */}
          </div>
          <div className="card-list test-icons-cont">
            <img src={quotes} className="quote-icon" />
            <div>
              <img src={star} className="test-icon" />
              <img src={star} className="test-icon" />
              <img src={star} className="test-icon" />
              <img src={star} className="test-icon" />
              <img src={star} className="test-icon" />
            </div>
          </div>
          <div className="card-list-test card-list-test-p">
            <p className="card-desc-test">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam
              nonu eirmod tempor invidunt labore. seddiam nonu eirmod tempor
              invidunt labore.
            </p>
          </div>
          <div className="card-list-test-auth">
            <img src={author1} className="author" />
            <div className="test-detail">
              <p className="author-name">Seyfe.E</p>
              <p>Engineer</p>
            </div>
          </div>
        </div>

        <div className=" card-test-testemonial">
          <div className="card-list-test">
            {/* <img className="card-img" src={shape1} /> */}
          </div>
          <div className="card-list test-icons-cont">
            <img src={quotes} className="quote-icon" />
            <div>
              <img src={star} className="test-icon" />
              <img src={star} className="test-icon" />
              <img src={star} className="test-icon" />
              <img src={star} className="test-icon" />
              <img src={star} className="test-icon" />
            </div>
          </div>
          <div className="card-list-test card-list-test-p">
            <p className="card-desc-test">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam
              nonu eirmod tempor invidunt labore. seddiam nonu eirmod tempor
              invidunt labore.
            </p>
          </div>
          <div className="card-list-test-auth">
            <img src={author2} className="author" />
            <div className="test-detail">
              <p className="author-name">Seyfe.E</p>
              <p>Engineer</p>
            </div>
          </div>
        </div>

        <div className=" card-test-testemonial">
          <div className="card-list-test">
            {/* <img className="card-img" src={shape1} /> */}
          </div>
          <div className="card-list test-icons-cont">
            <img src={quotes} className="quote-icon" />
            <div>
              <img src={star} className="test-icon" />
              <img src={star} className="test-icon" />
              <img src={star} className="test-icon" />
              <img src={star} className="test-icon" />
              <img src={star} className="test-icon" />
            </div>
          </div>
          <div className="card-list-test card-list-test-p">
            <p className="card-desc-test">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam
              nonu eirmod tempor invidunt labore. seddiam nonu eirmod tempor
              invidunt labore.
            </p>
          </div>
          <div className="card-list-test-auth">
            <img src={author3} className="author" />
            <div className="test-detail">
              <p className="author-name">Seyfe.E</p>
              <p>Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testemonial;
