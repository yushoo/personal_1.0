import "./Landing.css";

import me from "./media/me.jpg";
import rightArrow from "./media/right-arrow.svg";
import linkedinIcon from "./media/logo-linkedin.svg";

import Content from "./Content";

export default function Landing() {
  return (
    <>
      {/* landing */}
      <section>
        <div className="parent">
          {/* title/brief description */}
          <span className="title">Henry Feng</span>
          <div className="photoContainer">
            <img className="photo" src={me} />
            {/* social media icons*/}
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
          {/* smooth scroll button */}
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

      {/* content */}
      <section id="content">
        <Content id="content" />
      </section>
    </>
  );
}
