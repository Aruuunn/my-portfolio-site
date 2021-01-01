import React, { ReactElement } from "react";

import Header from "../Header";

interface Props {
  children: React.ReactNode;
  title?: string;
}

function Layout(props: Props): ReactElement {
  const { children, title } = props;
  return (
    <>
      <Header title={title} />
      {children}
    </>
  );
}

export default Layout;
