import React, { ReactElement, useState, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Project } from "./components";
import commonStyles from "../../styles/common.module.scss";
import styles from "./styles.module.scss";
import { projects } from "./projects.data";

interface Props {
  disableAnimation?: boolean;
}

function calculateLimitBasedOnDeviceWidth() {
  if (typeof window !== "undefined") {
    if (window.innerWidth > 1280) {
      return 6;
    } else if (window.innerWidth > 890) {
      return 4;
    } else {
      return 2;
    }
  }
  return 6;
}

function Projects(props: Props): ReactElement {
  const { disableAnimation } = props;
  const [limit, setLimit] = useState(calculateLimitBasedOnDeviceWidth());
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <div id="projects" className={styles.mainContainer}>
      <section className={commonStyles.container}>
        <h2 style={{ position: "relative", left: "10px" }}>My Top Projects</h2>
        <p className={commonStyles.secondaryText}>
          /* I love making something cool. The best thing about coding that I
          love is that I can create something from an idea which started from my
          brain. */
        </p>
        <div
          data-aos={disableAnimation ? "" : "fade-up"}
          data-aos-offset="200"
          data-aos-easing="ease-out"
          data-aos-duration="1000"
        >
          <div className={styles.projectsContainer}>
            {projects.slice(0, limit).map((o, i) => {
              return (
                <Project
                  key={i}
                  description={o.description}
                  tags={o.tags}
                  url={o.url}
                  githubUrl={o.githubUrl}
                  title={o.title}
                  fluid={data.allFile.nodes.reduce((t, c) => {
                    console.log(c.relativePath, o.image);
                    if (c.relativePath === `projects/${o.image.trim()}`) {
                      return c.childImageSharp.fluid;
                    }
                    if (t) {
                      return t;
                    }
                  }, undefined)}
                />
              );
            })}
          </div>
          {projects.length > limit ? (
            <div
              style={{ margin: "10px" }}
              className={commonStyles.underlinedLink}
              onClick={() => {
                setLimit(projects.length);
              }}
            >
              Show all
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default Projects;
