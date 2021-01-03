import React, { ReactElement, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Project } from "./components";
import commonStyles from "../../styles/common.module.scss";
import styles from "./styles.module.scss";
import { FluidObject } from "gatsby-image";

interface Props {
  disableAnimation?: boolean;
}

function calculateLimitBasedOnDeviceWidth() {
  if (window.innerWidth > 1280) {
    return 6;
  } else if (window.innerWidth > 890) {
    return 4;
  } else {
    return 2;
  }
}

function Projects(props: Props): ReactElement {
  const { disableAnimation } = props;
  const [limit, setLimit] = useState(calculateLimitBasedOnDeviceWidth());
  //---- mocking data
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "p1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const projects: {
    fluid: FluidObject;
    title: string;
    description: string;
    url?: string;
    githubUrl?: string;
  }[] = [];
  for (let i = 0; i < 6; i++) {
    projects.push({
      title: "Labore nostrud nisi aute et dolore in.",
      description:
        "Lorem nisi duis anim aliqua deserunt laboris adipisicing dolore cillum et consequat reprehenderit tempor.",
      fluid: data.file.childImageSharp.fluid,
      url:
        "Dolor id laboris aliquip enim excepteur culpa qui dolore incididunt cillum nulla nostrud labore aliquip.",
      githubUrl:
        "Duis tempor commodo duis tempor excepteur aliqua consectetur sunt excepteur dolore est officia.",
    });
  }

  //-----
  console.log(projects);
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
          data-aos-duration="600"
        >
          <div className={styles.projectsContainer}>
            {projects.slice(0, limit).map((o, i) => {
              return (
                <Project
                  key={i}
                  {...{
                    title: "Labore nostrud nisi aute et dolore in.",
                    description:
                      "Lorem nisi duis anim aliqua deserunt laboris adipisicing dolore cillum et consequat reprehenderit tempor.",
                    fluid: data.file.childImageSharp.fluid,
                    url:
                      "Dolor id laboris aliquip enim excepteur culpa qui dolore incididunt cillum nulla nostrud labore aliquip.",
                    githubUrl:
                      "Duis tempor commodo duis tempor excepteur aliqua consectetur sunt excepteur dolore est officia.",
                    tags: ["reactjs", "typescript", "material ui", "frontend"],
                  }}
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
