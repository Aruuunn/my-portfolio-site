import React, { ReactElement, useState, useEffect } from "react";
import { Link } from "gatsby";

import PrimaryLinkButton from "../PrimaryLinkButton";
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

      <div className={styles.item} style={{ display: "inline-block" }}>
        <p style={{ maxWidth: "600px" }}>
          👋 Hello there, I'm Arun. I am a{" "}
          <span className={styles.underline}>Web developer</span> and a Tech
          Enthusiast. I love coding and cofee ☕.
        </p>

        <div style={{ marginTop: "30px" }}>
          <PrimaryLinkButton to="/#contact-me" text="Contact Me" />
        </div>
      </div>
      <div className={scrolled ? styles.hideElement : styles.contactContainer}>
        <Link
          target="_blank"
          rel="noopener"
          to="https://github.com/ArunMurugan78"
        >
          <img
            src={GithubIcon}
            alt="gtihub"
            style={{ height: "35px", width: "35px" }}
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener"
          to="https://www.linkedin.com/in/arun-murugan-50885717a/"
        >
          {" "}
          <img
            src={LinkedinIcon}
            alt="linkedin"
            style={{ height: "35px", width: "44px" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Intro;
