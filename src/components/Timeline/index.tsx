import React, { ReactElement } from "react";

import { secondaryText } from "../../styles/common.module.scss";
import styles from "./styles.module.scss";

interface Props {
  events: { title: string; description: string }[];
}

function Timeline(props: Props): ReactElement {
  const { events } = props;
  return (
    <div
      className={styles.container}
      style={{ height: `${150 + 100 * events.length}px` }}
    >
      <svg
        className={styles.topOutlinedCircle}
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="6" strokeWidth="3" stroke="#97979F" />
      </svg>
      {events.map((o, i) => {
        return (
          <div
            key={i}
            style={{ top: 100 * (i + 1) }}
            className={styles.filledCircle}
          >
            {" "}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.5"
                cy="7.5"
                r="6"
                fill="#97979F"
                strokeWidth="3"
                stroke="#97979F"
              />
            </svg>{" "}
            <div style={{ marginLeft: "10px" }}>
              <h3 style={{ marginTop: 0 }}>{o.title}</h3>
              <p className={secondaryText}>{o.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
