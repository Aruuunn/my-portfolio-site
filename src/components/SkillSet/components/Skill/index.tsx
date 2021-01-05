import React, { ReactElement } from "react";

import SkillBar from "../SkillBar";
import ISkill from "../../Skill.interface";
import styles from "./styles.module.scss";

type Props = ISkill & {
  key?: any;
  noSkillBar?: boolean;
};

export default function Skill({
  name,
  value,
  key,
  noSkillBar,
}: Props): ReactElement {
  return (
    <div key={key} className={styles.container}>
      <span style={{ marginRight: "20px" }}>{name}</span>{" "}
      {!noSkillBar ? <SkillBar value={value} /> : null}
    </div>
  );
}
