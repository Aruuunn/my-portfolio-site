import React, { ReactElement } from "react";
import Img, { FluidObject } from "gatsby-image";
import { Link } from "gatsby";

import Tags from "../../../Tags";
import externalLinkIcon from "../../../../images/link.svg";
import gtihubIcon from "../../../../images/github.svg";
import styles from "./styles.module.scss";

interface Props {
  fluid: FluidObject;
  title: string;
  description: string;
  url?: string;
  githubUrl?: string;
  key?: any;
  tags: string[];
}

function Project(props: Props): ReactElement {
  const { description, title, fluid, githubUrl, url, key, tags } = props;
  return (
    <div key={key} className={styles.container}>
      <Img fluid={fluid} />
      <h4>{title}</h4>
      <p className={styles.description}>{description}</p>
      <Tags tags={tags} />

      <div className={styles.linksContainer}>
        {url ? (
          <Link to={url}>
            <img
              src={externalLinkIcon}
              alt="external link"
              style={{ height: "35px", width: "35px" }}
            />
          </Link>
        ) : null}
        {githubUrl ? (
          <Link to={githubUrl}>
            <img
              src={gtihubIcon}
              alt="github link"
              style={{ height: "30px", width: "30px", marginLeft: "20px" }}
            />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Project;
