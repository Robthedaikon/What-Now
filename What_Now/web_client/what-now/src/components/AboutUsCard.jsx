import React from "react";
import aboutUsImage from "../images/empty-theatre-small.jpg";

export const AboutUsCard = (props) => {
  return (
    <div className={"AboutUsCard"}>
      <img src={aboutUsImage} alt={"Empty theatre"} />
      <div className={"AboutUsInfoDiv"}>
        <h2>About Us</h2>
        <p>
          We've been improvising together for over 6 months. We do long-form,
          short-form and everything in between.
        </p>
      </div>
    </div>
  );
};
