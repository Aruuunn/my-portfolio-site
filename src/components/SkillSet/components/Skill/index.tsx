import React, { ReactElement } from "react";

import SkillBar from "../SkillBar";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  value: 1 | 2 | 3 | 4 | 5;
  key?: any;
}

export default function Skill({ name, value, key }: Props): ReactElement {
  return (
    <div key={key} className={styles.container}>
      <span style={{ marginRight: "20px" }}>{name}</span>{" "}
      <SkillBar value={value} />
    </div>
  );
}
