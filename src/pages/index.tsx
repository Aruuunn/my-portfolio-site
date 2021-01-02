import React from "react";

import { Layout, Intro, SidePositionIndicator, Skillset } from "../components";
import "../styles/global.scss";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <Layout title={"Arun Murugan | Personal Portfolio"}>
        <Intro />
        <Skillset />
      </Layout>
      <SidePositionIndicator
        sections={["intro", "skillset", "projects", "blog", "contact"]}
      />
    </>
  );
};

export default Home;
