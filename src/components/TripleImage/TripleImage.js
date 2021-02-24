import React from "react";

import backpackmanhome from "./backpackmanhome.png";
import tenthome from "./tenthome.jpg";
import sleepingbaghome from "./sleepingbaghome.jpg";
import "./TripleImage.css";
import { Link } from "react-router-dom";

function TripleImageComponent() {
  return (
    <div className="wrap">
      <div className="row">
      <Link to="/directoryBackPack">
          <div className="column">
            <div className="imgWrap">
              <img src={backpackmanhome} alt="backpack" />
              <div className="centered">Backpacks</div>
            </div>
          </div>
          </Link>
          <Link to="/directoryTents">
          <div className="column">
            <div className="imgWrap">
              <img src={tenthome} alt="tent" />
              <div className="centered">Tents</div>
            </div>
          </div>
          </Link>
          <Link to="/directorySleepingBags">
          <div className="column">
            <div className="imgWrap">
              <img src={sleepingbaghome} alt="sleepingbag" />
              <div className="centered">Sleeping Bags</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TripleImageComponent;
