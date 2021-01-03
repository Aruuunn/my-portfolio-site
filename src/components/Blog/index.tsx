import React, { ReactElement } from "react";

import { Tags } from "../../components";
import commonStyles from "../../styles/common.module.scss";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  source: string;
  description: string;
  tags: string[];
}

function Blog(props: Props): ReactElement {
  const { title, description, source, tags } = props;
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p style={{ paddingLeft: "10px" }} className={commonStyles.secondaryText}>
        {source}
      </p>
      <p className={styles.description}>{description}</p>
      <Tags tags={tags} />
    </div>
  );
}

export default Blog;
