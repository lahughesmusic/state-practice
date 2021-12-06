import ascap from "./images/ASCAP.jpeg";
import bmi from "./images/BMI.jpeg";
import gmr from "./images/GMR.jpg";
import sesac from "./images/SESAC.png";
import hfa from "./images/HFA.jpeg";
import "./PROs.css";

const PROs = () => {
  return (
    <div>
      <br />
      <h2 className="pro">Meet your PROs</h2>
      <br />
      <div className="grid-container">
        <div className="item1">
          <a href="https://www.ascap.com/">
            <h2>ASCAP</h2>
            <img src={ascap} alt="" />
          </a>
        </div>
        <div className="item2">
          <a href="https://www.bmi.com/">
            <h2>BMI</h2>
            <img src={bmi} alt="" />
          </a>
        </div>

        <div className="item3">
          <a href="https://globalmusicrights.com/">
            <h2>GMR</h2>
            <img src={gmr} alt="" />
          </a>
        </div>
        <div className="item4">
          <a href="https://www.sesac.com/">
            <h2>SESAC</h2>
            <img src={sesac} alt="" />
          </a>
        </div>
        <div className="item5">
          <a href="https://www.harryfox.com/#/">
            <h2>HFA</h2>
            <img src={hfa} alt="" />
          </a>
        </div>
      </div>
      <br />
      <br />

      <h2 className="pro">Further Resources</h2>
      <a href="https://www.soundexchange.com/">
        <h2 className="furtherResources" style={{ color: "blue" }}>
          Sound Exchange
        </h2>
      </a>
      <a href="https://www.discogs.com/">
        <h2 className="furtherResources" style={{ color: "blue" }}>
          Discogs
        </h2>
      </a>
      <a href="https://www.youtube.com/">
        <h2 className="furtherResources" style={{ color: "blue" }}>
          Youtube
        </h2>
      </a>
      <a href="https://wikipedia.com/">
        <h2 className="furtherResources" style={{ color: "blue" }}>
          Wikipedia
        </h2>
      </a>
      <a href="https://bandcamp.com/">
        <h2 className="furtherResources" style={{ color: "blue" }}>
          Bandcamp
        </h2>
      </a>
      <a href="https://www.spotify.com/us/">
        <h2 className="furtherResources" style={{ color: "blue" }}>
          Spotify{" "}
        </h2>
      </a>
    </div>
  );
};

export default PROs;
