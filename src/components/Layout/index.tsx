import React, { ReactElement } from "react";

import Header from "../Header";
import Navbar from "../Navbar";

import styles from "../../styles/common.module.scss";
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
      <div className={styles.container} style={{ paddingTop: "50px" }}>
        {children}
      </div>
    </>
  );
}

export default Layout;
