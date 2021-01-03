import React, { ReactElement } from "react";

import commonStyles from "../styles/common.module.scss";
import { Layout, MyBlogs } from "../components";

function Blogs(): ReactElement {
  return (
    <Layout title="Blogs | Arun Murugan">
      <div className={commonStyles.container}>
        <h1 className={commonStyles.underlinedHeading} style={{ margin: 0 }}>
          Blogs
        </h1>

        <p className={commonStyles.secondaryText} style={{ paddingLeft: 0 }}>
          /* Recently made blogs by me. */
        </p>
        <MyBlogs />
      </div>
    </Layout>
  );
}

export default Blogs;
