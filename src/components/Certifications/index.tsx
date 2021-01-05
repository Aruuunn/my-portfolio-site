import React, { ReactElement, useState } from "react";
import { Link } from "gatsby";

import commonStyles from "../../styles/common.module.scss";
import styles from "./styles.module.scss";
import externalLinkIcon from "../../images/link.svg";
import { myCertifications } from "./certifications.data";

interface Props {}

function Certifications({}: Props): ReactElement {
  const [limit, setLimit] = useState(5);
  return (
    <div
      id="certifications"
      className={commonStyles.container}
      style={{ paddingTop: "40px", paddingBottom: "40px" }}
    >
      <h2 style={{ paddingLeft: "10px" }}>Certifications</h2>
      <p className={commonStyles.secondaryText}>
        /* Learning never exhausts the mind */
      </p>
      {myCertifications.slice(0, limit).map((o, i) => {
        return (
          <div key={i} className={styles.certificationContainer}>
            <div>
              {" "}
              {o.name}
              {" - "}
              <span
                className={commonStyles.secondaryText}
                style={{ textTransform: "lowercase", margin: 0 }}
              >
                {o.organisation}
              </span>
            </div>
            <Link target="_blank" rel="noopener" to={o.url}>
              <img
                src={externalLinkIcon}
                alt={"external link to certificate"}
                style={{ height: "25px", width: "30px" }}
              />
            </Link>
          </div>
        );
      })}
      {myCertifications.length > limit ? (
        <div
          className={commonStyles.underlinedLink}
          onClick={() => setLimit(myCertifications.length)}
          style={{ marginLeft: "10px", marginTop: "10px" }}
        >
          Show all
        </div>
      ) : null}
    </div>
  );
}

export default Certifications;
