import React, { ReactElement } from "react";
import { Link } from "gatsby";

import { Tags } from "../../components";
import linkIcon from "../../images/link.svg";
import commonStyles from "../../styles/common.module.scss";
import styles from "./styles.module.scss";
import { Blog as IBlog } from "./Blog.interface";

type Props = IBlog & { key?: any };

function Blog(props: Props): ReactElement {
  const { title, description, source, tags, key, url } = props;

  return (
    <Link
      target="_blank"
      rel="noopener"
      to={url}
      key={key}
      className={styles.container}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ margin: 0 }}>{title}</h2>{" "}
        <img src={linkIcon} style={{ height: "27px", width: "27px" }} />
      </div>
      <p
        style={{ paddingLeft: "0px", margin: "10px 10px 10px 0" }}
        className={commonStyles.secondaryText}
      >
        {source}
      </p>
      <p className={styles.description}>{description}</p>
      <Tags tags={tags} />
    </Link>
  );
}

export default Blog;
