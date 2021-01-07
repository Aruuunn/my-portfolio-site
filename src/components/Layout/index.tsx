import React, { ReactElement, useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import commomStyles from "../../styles/common.module.scss";
import CustomCursor from "../CustomCursor";
import Header from "../Header";
import Footer from "../Footer";
import SidePositionIndicator from "../SidePositionIndicator";

type Props = {
  children: React.ReactNode;
  title?: string;
  disableCustomCursor?: boolean;
  sideNavBarEnabled?: boolean;
} & Partial<Parameters<typeof SidePositionIndicator>[0]>;

function Layout(props: Props): ReactElement {
  const {
    children,
    title,
    disableCustomCursor,
    sections,
    sideNavBarEnabled,
  } = props;

  useEffect(() => {
    Aos.init({ once: true, disable: "mobile" });
  }, []);

  return (
    <div>
      <a className={commomStyles.skipLink} href="#main">
        Jump to Main Content
      </a>
      <Header title={title} />
      <CustomCursor disabled={disableCustomCursor} />
      {sideNavBarEnabled && sections ? (
        <SidePositionIndicator sections={sections} />
      ) : null}
      <main
        id="main"
        style={{ paddingTop: "50px", minHeight: "calc( 100vh - 125px)" }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
