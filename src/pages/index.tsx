import React from "react";

import {
  Layout,
  Intro,
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
      <Layout
        title={"Arun Murugan | Personal Portfolio"}
        disableCustomCursor
        sideNavBarEnabled
        sections={[
          { idOfSection: "intro", description: "Introduction" },
          { idOfSection: "skillset", description: "My Skillset" },
          { idOfSection: "projects", description: "My Projects" },
          { idOfSection: "certifications", description: "My Certifications" },
          {
            idOfSection: "work-experience",
            description: "My Work Experience",
          },
          { idOfSection: "blogs", description: "My Blogs" },
          { idOfSection: "contact-me", description: "Contact Details" },
        ]}
      >
        <Intro />
        <Skillset />
        <Projects />
        <BlogsSection />
        <Certifications />
        <WorkExperience />
        <ContactMe />
      </Layout>
    </>
  );
};

export default Home;
