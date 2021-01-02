import React, { ReactElement } from "react";

import commonStyles from "../../styles/common.module.scss";
import styles from "./styles.module.scss";

interface Props {}

function Skillset({}: Props): ReactElement {
  return (
    <div id="skillset" className={styles.mainContainer}>
      <section className={commonStyles.container}>
        <h2>My Skillset</h2>
      </section>
    </div>
  );
}

export default Skillset;
