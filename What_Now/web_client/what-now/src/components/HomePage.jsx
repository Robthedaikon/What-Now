import React from "react";
import { AboutUsCard } from "./AboutUsCard";
import { Performers } from "./Performers";

export const HomePage = () => {
  return (
    <>
      <h2>London's hot new improvised comedy act based in London</h2>
      <div className={"HomePage"}>
        <AboutUsCard />
        <Performers />
      </div>
    </>
  );
};
