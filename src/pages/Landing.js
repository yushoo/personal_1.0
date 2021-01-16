import "./Landing.css";

import me from "./media/me.jpg";
import rightArrow from "./media/right-arrow.svg";
import linkedinIcon from "./media/logo-linkedin.svg";

import Content from "./Content";

export default function Landing() {
  return (
    <>
      <section>
        <div className="parent">
          <span className="title">Henry Feng</span>
          <div className="photoContainer">
            <img className="photo" src={me} />

            <div className="socials">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/henry-feng-9a11b0129/"
              >
                <img className="photoSocials" src={linkedinIcon} />
              </a>
            </div>
          </div>
          <div className="">
            <a href="#content">
              <img
                className="child rightArrow"
                href="#content"
                src={rightArrow}
                alt="React Logo"
              />
            </a>
          </div>
        </div>
      </section>
      <section id="content">
        <Content id="content" />
      </section>
    </>
  );
}
