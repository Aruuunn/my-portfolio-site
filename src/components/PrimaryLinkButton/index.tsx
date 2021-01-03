import React, { ReactElement } from "react";
import { Link } from "gatsby";

import styles from "./styles.module.scss";

interface Props {
  to: string;
  text: string;
  style?: Object;
}

function PrimaryLinkButton(props: Props): ReactElement {
  const { to, text, style } = props;
  return (
    <Link style={style} className={styles.primaryButton} to={to}>
      {text}
    </Link>
  );
}

export default PrimaryLinkButton;
