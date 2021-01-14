import "./Landing.css";

import me from "./media/me.jpg";
import rightArrow from "./media/right-arrow.svg";

export default function Landing() {
  return (
    <div className="parent">
      <span className="title">Henry Feng</span>
      <div className="photoContainer">
        <img className="photo" src={me} />
      </div>
      <div className="">
        <img className="child rightArrow" src={rightArrow} alt="React Logo" />
      </div>
    </div>
  );
}
