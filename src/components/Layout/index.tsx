import React, { ReactElement } from "react";

import Header from "../Header";
import Navbar from "../Navbar";

interface Props {
  children: React.ReactNode;
  title?: string;
}

function Layout(props: Props): ReactElement {
  const { children, title } = props;
  return (
    <>
      <Header title={title} />
      <Navbar />
      <div style={{ paddingTop: "50px" }}>{children}</div>
    </>
  );
}

export default Layout;
