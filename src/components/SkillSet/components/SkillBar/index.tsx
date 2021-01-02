import React, { ReactElement } from "react";

import styles from "./styles.module.scss";

interface Props {
  value: 1 | 2 | 3 | 4 | 5;
}

function Bar({ filled }: { filled: boolean }): ReactElement {
  return <div className={filled ? styles.filledBar : styles.bar}></div>;
}

function SkillBar({ value }: Props): ReactElement {
  const bars: ReactElement[] = [];
  for (let i = 0; i < 5; i++) {
    bars.push(<Bar key={i} filled={i < value} />);
  }
  return <div className={styles.barContainer}>{bars}</div>;
}

export default SkillBar;
