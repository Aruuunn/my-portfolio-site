import React, { ReactElement, useEffect, useState, createContext } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import CustomCursor from "../CustomCursor";
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface Props {
  children: React.ReactNode;
  title?: string;
}

function Layout(props: Props): ReactElement {
  const { children, title } = props;

  useEffect(() => {
    Aos.init({ once: true, disable: "mobile" });
  }, []);

  return (
    <div>
      <Header title={title} />
      <Navbar />
      <CustomCursor disabled />
      <div style={{ paddingTop: "50px", minHeight: "calc( 100vh - 125px)" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
