import React from "react";

import styles from "./styles.module.scss";

interface Props {
  tags: string[];
}

const Tags = (props: Props) => {
  const { tags } = props;
  return (
    <div className={styles.tagsContainer}>
      {" "}
      {tags.map((o, i) => {
        return (
          <div className={styles.tag} key={i}>
            #{o}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
