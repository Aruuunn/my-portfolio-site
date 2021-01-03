import React, { ReactElement } from "react";

import styles from "./styles.module.scss";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <div className={styles.mainContainer}>Copyright (c) 2021 Arun Murugan</div>
  );
}
