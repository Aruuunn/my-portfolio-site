import React from "react";

import { Layout, Intro } from "../components";
import "../styles/global.scss";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <Layout title={"Arun Murugan | Personal Portfolio"}>
        <Intro />
      </Layout>
    </>
  );
};

export default Home;
