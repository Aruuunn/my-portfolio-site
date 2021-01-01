import React, { ReactElement } from "react";

import { MyImage } from "./components";
import "./styles.scss";

interface Props {}

function Intro({}: Props): ReactElement {
  return (
    <div className="content-container">
      <MyImage size={260} />
      <p style={{ maxWidth: "600px" }}>
        👋 Hello there, I am Arun. I am a Web developer and a Tech Enthusiast. I
        love coding and cofee ☕.
      </p>
    </div>
  );
}

export default Intro;
