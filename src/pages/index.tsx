import React from "react";

import { Layout, Navbar } from "../components";
import "../styles/global.scss";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <Layout title={"Arun Murugan | Personal Portfolio"}>
        <Navbar />
      </Layout>
    </>
  );
};

export default Home;
