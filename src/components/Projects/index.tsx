import React, { ReactElement, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Project } from "./components";
import commonStyles from "../../styles/common.module.scss";
import styles from "./styles.module.scss";
import { FluidObject } from "gatsby-image";

interface Props {}

function Projects({}: Props): ReactElement {
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

  const mockData: {
    fluid: FluidObject;
    title: string;
    description: string;
    url?: string;
    githubUrl?: string;
  }[] = [];
  for (let i = 0; i < 6; i++) {
    mockData.push({
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
  console.log(mockData);
  return (
    <div id="projects" className={styles.mainContainer}>
      <section className={commonStyles.container}>
        <h2 style={{ paddingLeft: "10px" }}>My Top Projects</h2>
        <p
          className={commonStyles.secondaryText}
          style={{
            marginTop: "30px",
            marginBottom: "30px",
            paddingLeft: "10px",
          }}
        >
          /* I love making something cool. The best thing about coding that I
          love is that I can create something from an idea which started from my
          brain. */
        </p>
        <div className={styles.projectsContainer}>
          {mockData.map((o, i) => {
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
      </section>
    </div>
  );
}

export default Projects;
