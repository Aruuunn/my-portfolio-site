import React, { ReactElement } from "react";

import commonStyles from "../../styles/common.module.scss";

interface Props {
  text: string;
  style?: Object;
}

function InsideMultilineCommentsLineText({ text, style }: Props): ReactElement {
  return (
    <p className={commonStyles.secondaryText} style={style}>
      <span aria-hidden="true">/*</span> {text}{" "}
      <span aria-hidden="true">*/</span>
    </p>
  );
}

export default InsideMultilineCommentsLineText;
