import "./Landing.css";
import me from "./me.jpg";
export default function Landing() {
  return (
    <div>
      <div className="parent">
        <h1 className="child">Henry Feng</h1>
      </div>
      <div>
        <div className="photoContainer">
          <img className="photo" src={me} />
        </div>
      </div>
    </div>
  );
}
