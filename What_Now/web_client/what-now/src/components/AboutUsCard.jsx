import React from "react";
import aboutUsImage from "../images/empty-theatre-small.jpg";

export const AboutUsCard = (props) => {
  return (
    <div className={"AboutUsCard"}>
      <img src={aboutUsImage} alt={"Empty theatre"} />
      <div className={"AboutUsInfoDiv"}>
        <p>
          Welcome to the hilariously unpredictable world of the "What Now?!"
          improv comedy group! Here, on-stage theatrics meet spontaneous
          storytelling to create a wild roller-coaster ride of laughter.
          <br />
          <br />
          Whether you're an avid improv fan or a first-time viewer, prepare to
          be part of an unforgettable, laugh-out-loud experience! Stay tuned for
          show dates, unique performances, and behind-the-scenes fun.
        </p>
      </div>
    </div>
  );
};
