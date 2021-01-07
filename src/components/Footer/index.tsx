import React, { ReactElement } from "react";

import styles from "./styles.module.scss";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className={styles.mainContainer}>
      Copyright (c) 2021 Arun Murugan
    </footer>
  );
}
