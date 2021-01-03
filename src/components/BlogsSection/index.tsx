import React, { ReactElement } from "react";
import { Link } from "gatsby";

import commonStyles from "../../styles/common.module.scss";

interface Props {}

export default function Blogs({}: Props): ReactElement {
  return (
    <div className={commonStyles.container}>
      <section id="blogs" style={{ paddingTop: "60px", paddingBottom: "10px" }}>
        <h2 style={{ position: "relative", left: "10px" }}>Blogs</h2>
        <p className={commonStyles.secondaryText}>
          /* What could be more satisfying than helping others by spreading your
          knowledge */
        </p>
        <Link
          style={{ textDecoration: "none", position: "relative", left: "10px" }}
          to="/blogs"
          className={commonStyles.underlinedLink}
        >
          Go to Blogs
        </Link>
      </section>
    </div>
  );
}