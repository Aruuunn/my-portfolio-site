import React from "react";

import {
  Layout,
  Intro,
  SidePositionIndicator,
  Skillset,
  Projects,
  WorkExperience,
  BlogsSection,
  ContactMe,
  Certifications,
} from "../components";
import "../styles/global.scss";

const Home = () => {
  return (
    <>
      <Layout title={"Arun Murugan | Personal Portfolio"} disableCustomCursor>
        <Intro />
        <Skillset />
        <Projects />
        <Certifications />
        <WorkExperience />
        <BlogsSection />
        <ContactMe />
      </Layout>
      <SidePositionIndicator
        sections={[
          "intro",
          "skillset",
          "projects",
          "certifications",
          "work-experience",
          "blogs",
          "contact-me",
        ]}
      />
    </>
  );
};

export default Home;
