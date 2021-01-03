import React, { ReactElement, useState } from "react";

import { Skill } from "./components";
import commonStyles from "../../styles/common.module.scss";
import styles from "./styles.module.scss";

interface Props {
  disableAnimation?: boolean;
}

const skills: { name: string; value: 1 | 2 | 3 | 4 | 5 }[] = [
  { name: "Reactjs", value: 3 },
  { name: "Reactjs", value: 3 },
  { name: "Reactjs", value: 2 },
  { name: "Reactjs", value: 3 },
  { name: "Reactjs", value: 5 },
  { name: "Reactjs", value: 3 },
  { name: "Reactjs", value: 3 },
  { name: "Reactjs", value: 2 },
  { name: "Reactjs", value: 5 },
  { name: "Reactjs", value: 3 },
  { name: "Reactjs", value: 3 },
  { name: "Reactjs", value: 2 },
  { name: "Reactjs", value: 3 },
  { name: "Reactjs", value: 3 },
  { name: "Reactjs", value: 5 },
  { name: "Reactjs", value: 1 },
  { name: "Reactjs", value: 3 },
  { name: "Reactjs", value: 4 },
  { name: "Reactjs", value: 3 },
];

function Skillset(props: Props): ReactElement {
  const { disableAnimation } = props;
  const [limit, setLimit] = useState(10);

  return (
    <div id="skillset" className={styles.mainContainer}>
      <section className={commonStyles.container}>
        <h2 style={{ position: "relative", left: "10px" }}>My Skillset</h2>
        <p className={commonStyles.secondaryText}>
          /* I love learning new technologies and applying it. */
        </p>
        <div
          data-aos={disableAnimation ? "" : "fade-up"}
          data-aos-offset="200"
          data-aos-easing="ease-out"
          data-aos-duration="600"
        >
          {" "}
          <div className={styles.skillsContainer}>
            {skills.slice(0, limit).map((o, i) => (
              <Skill key={i} {...o} />
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
