import "./Footer.scss";
const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-sub">
        <p className="footer-p">
          <span className="footer-p-one">Subscribe Our Newsletter</span>
          <span className="footer-p-two"> get reguler updates</span>
        </p>
        <div className="sub">
          <input type="text" className="input" placeholder="Enter your email" />
          <a href="#">Subscribe</a>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-col"></div>
        <div className="footer-col"></div>
        <div className="footer-col"></div>
        <div className="footer-col"></div>
      </div>
    </section>
  );
};
export default Footer;
