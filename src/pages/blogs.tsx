import React, { ReactElement } from "react";

import Loadable from "@loadable/component";
import commonStyles from "../styles/common.module.scss";
import { Layout } from "../components";

const MyBlogs = Loadable(() => import("../components/MyBlogs"));

function Blogs(): ReactElement {
  return (
    <Layout title="Blogs | Arun Murugan" disableCustomCursor>
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
