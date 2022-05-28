import "./Footer.scss";
import { useState } from "react";
import logo from "../assets/logo.svg";
const linkDate = [
  {
    id: "li1",
    linkTite: "Quike Link",
    l1: "Road Map",
    l2: "Privacy Policy",
    l3: "Refund Policy",
    l4: "Terms of Service",
    l5: "Pricing",
  },
  {
    id: "li2",
    linkTite: "Resources",
    l1: "Road Map",
    l2: "Privacy Policy",
    l3: "Refund Policy",
    l4: "Terms of Service",
    l5: "Pricing",
  },
  {
    id: "li3",
    linkTite: "Contact Us",
    l1: "Road Map",
    l2: "Privacy Policy",
    l3: "Refund Policy",
    l4: "Terms of Service",
    l5: "Pricing",
  },
];
const Footer = () => {
  const [linkState, SetLinkState] = useState(linkDate);
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
        <div className="footer-col footer-col-1">
          <img src={logo} className="logo" />
          <p className="footer-text">
            Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </p>
        </div>

        {linkState.map((link) => {
          return (
            <div className="footer-col" key={link.id}>
              <p className="links">{link.linkTite}</p>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#">{link.l1}</a>
                </li>
                <li className="footer-item">
                  <a href="#">{link.l2}</a>
                </li>
                <li className="footer-item">
                  <a href="#">{link.l3}</a>
                </li>
                <li className="footer-item">
                  <a href="#">{link.l4}</a>
                </li>
                <li className="footer-item">
                  <a href="#">{link.l5}</a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="copyright">
        <p> Developed by Seyfe Esubalew</p>
        <p>
          Design Credit to{" "}
          <a className="uni" href="https://uideck.com/" target="_blank">
            UIdeck
          </a>
        </p>
      </div>
    </section>
  );
};
export default Footer;
