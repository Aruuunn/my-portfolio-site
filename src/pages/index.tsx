import React from "react";

import {
  Layout,
  Intro,
  SidePositionIndicator,
  Skillset,
  Projects,
  WorkExperience,
} from "../components";
import "../styles/global.scss";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <Layout title={"Arun Murugan | Personal Portfolio"}>
        <Intro />
        <Skillset />
        <Projects />
        <WorkExperience />
      </Layout>
      <SidePositionIndicator
        sections={[
          "intro",
          "skillset",
          "projects",
          "work-experience",
          "blog",
          "contact",
        ]}
      />
    </>
  );
};

export default Home;
