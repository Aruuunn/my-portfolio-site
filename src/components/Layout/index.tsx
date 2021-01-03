import React, { ReactElement } from "react";

import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
interface Props {
  children: React.ReactNode;
  title?: string;
}

function Layout(props: Props): ReactElement {
  const { children, title } = props;
  return (
    <div>
      <Header title={title} />
      <Navbar />
      <div style={{ paddingTop: "50px", minHeight: "calc( 100vh - 125px)" }}>
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
