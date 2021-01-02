import React, { ReactElement, useState, useEffect } from "react";

import { MyImage } from "./components";
import GithubIcon from "../../images/github.svg";
import LinkedinIcon from "../../images/linkedin.svg";
import styles from "./styles.module.scss";

interface Props {}

function Intro({}: Props): ReactElement {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => (!scrolled ? setScrolled(true) : null);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.contentContainer} id="intro">
      <MyImage style={{ marginBottom: "70px" }} size={200} />

      <div className={styles.item}>
        <p style={{ maxWidth: "600px" }}>
          👋 Hello there, I'm Arun. I am a{" "}
          <span className={styles.underline}>Web developer</span> and a Tech
          Enthusiast. I love coding and cofee ☕.
        </p>
      </div>
      <div className={scrolled ? styles.hideElement : styles.contactContainer}>
        <img
          src={GithubIcon}
          alt="gtihub"
          style={{ height: "35px", width: "35px" }}
        />
        <img
          src={LinkedinIcon}
          alt="linkedin"
          style={{ height: "35px", width: "44px" }}
        />
      </div>
    </div>
  );
}

export default Intro;
