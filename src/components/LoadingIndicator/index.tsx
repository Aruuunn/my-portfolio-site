import React, { ReactElement } from "react";

import "./styles.scss";

interface Props {}

function LoadingIndicator({}: Props): ReactElement {
  return (
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingIndicator;
