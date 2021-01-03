import React, { ReactElement } from "react";

import commonStyles from "../../styles/common.module.scss";
import Timeline from "../Timeline";

interface Props {}

function WorkExperience({}: Props): ReactElement {
  return (
    <div
      className={commonStyles.container}
      style={{ paddingTop: "10px" }}
      id="work-experience"
    >
      <h2 style={{ position: "relative", left: "10px" }}>Work Experience</h2>
      <p
        style={{ marginBottom: "40px" }}
        className={commonStyles.secondaryText}
      >
        /* Team work makes the dream work */
      </p>
      <Timeline
        events={[
          {
            description: "2020 Jun- 2020 Jul, at Learnogether",
            title: "Software Developer Intern",
          },
        ]}
      />
    </div>
  );
}

export default WorkExperience;
