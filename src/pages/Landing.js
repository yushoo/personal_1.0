import "./Landing.css";

import me from "./media/me.jpg";
import rightArrow from "./media/right-arrow.svg";

export default function Landing() {
  return (
    <div>
      <div className="parent">
        <h1 className="">Henry Feng</h1>
      </div>
      <div>
        <div className="photoContainer">
          <img className="photo" src={me} />
        </div>
        <div className="parent">
          <img className="child rightArrow" src={rightArrow} alt="React Logo" />
        </div>
      </div>
    </div>
  );
}
