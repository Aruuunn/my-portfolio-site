import React, { ReactElement, useState } from "react";

import { Skill } from "./components";
import commonStyles from "../../styles/common.module.scss";
import styles from "./styles.module.scss";

interface Props {}

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

function Skillset({}: Props): ReactElement {
  const [limit, setLimit] = useState(10);

  return (
    <div id="skillset" className={styles.mainContainer}>
      <section className={commonStyles.container}>
        <h2 style={{ paddingLeft: "10px" }}>My Skillset</h2>
        <p
          className={commonStyles.secondaryText}
          style={{
            marginTop: "30px",
            marginBottom: "30px",
            paddingLeft: "10px",
          }}
        >
          /* I love learning new technologies and applying it. */
        </p>
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
      </section>
    </div>
  );
}

export default Skillset;
