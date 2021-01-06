import React, { ReactElement, useState } from "react";

import styles from "./styles.module.scss";
import commonStyles from "../../styles/common.module.scss";
import { InsideMultilineCommentLikeText } from "../../components";
import { Skill } from "./components";
import { skills } from "./skills.data";

interface Props {
  disableAnimation?: boolean;
}

function Skillset(props: Props): ReactElement {
  const { disableAnimation } = props;
  const [limit, setLimit] = useState(10);

  return (
    <div id="skillset" className={styles.mainContainer}>
      <section className={commonStyles.container}>
        <h2 style={{ position: "relative", left: "10px" }}>My Skillset</h2>
        <InsideMultilineCommentLikeText text="I love learning new technologies and applying it." />
        <div
          data-aos={disableAnimation ? "" : "fade-up"}
          data-aos-offset="200"
          data-aos-easing="ease-out"
          data-aos-duration="1000"
        >
          {" "}
          <div className={styles.skillsContainer}>
            {skills.slice(0, limit).map((o, i) => (
              <Skill key={i} {...o} noSkillBar />
            ))}
          </div>
          {skills.length > limit ? (
            <div
              className={styles.showMoreText}
              onClick={() => {
                setLimit(skills.length);
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

export default Skillset;
