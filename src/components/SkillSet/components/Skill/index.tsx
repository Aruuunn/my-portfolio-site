import React, { ReactElement } from "react";

import SkillBar from "../SkillBar";
import ISkill from "../../Skill.interface";
import styles from "./styles.module.scss";

type Props = ISkill & {
  key?: any;
};

export default function Skill({ name, value, key }: Props): ReactElement {
  return (
    <div key={key} className={styles.container}>
      <span style={{ marginRight: "20px" }}>{name}</span>{" "}
      <SkillBar value={value} />
    </div>
  );
}
