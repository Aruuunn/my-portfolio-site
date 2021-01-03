import React, { ReactElement } from "react";

import commonStyles from "../../styles/common.module.scss";
import Timeline from "../Timeline";

interface Props {
  disableAnimation?: boolean;
}

function WorkExperience(props: Props): ReactElement {
  const { disableAnimation } = props;

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
      <div
        data-aos={disableAnimation ? "" : "fade-up"}
        data-aos-offset="200"
        data-aos-easing="ease-out"
        data-aos-duration="600"
      >
        <Timeline
          events={[
            {
              description: "2020 Jun- 2020 Jul, at Learnogether",
              title: "Software Developer Intern",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default WorkExperience;
