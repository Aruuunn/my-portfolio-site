import React, { ReactElement, useState } from "react";
import { Link } from "gatsby";

import commonStyles from "../../styles/common.module.scss";
import styles from "./styles.module.scss";
import { InsideMultilineCommentLikeText } from "../../components";
import externalLinkIcon from "../../images/link.svg";
import { myCertifications } from "./certifications.data";

interface Props {
  disableAnimation?: boolean;
}

function Certifications({ disableAnimation }: Props): ReactElement {
  const [limit, setLimit] = useState(5);
  return (
    <div
      id="certifications"
      className={commonStyles.container}
      style={{ paddingTop: "40px", paddingBottom: "40px" }}
    >
      <h2 style={{ paddingLeft: "10px" }}>Certifications</h2>
      <InsideMultilineCommentLikeText text="Learning never exhausts the mind" />
      <div
        data-aos={disableAnimation ? "" : "fade-up"}
        data-aos-offset="200"
        data-aos-easing="ease-out"
        data-aos-duration="1000"
      >
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
    </div>
  );
}

export default Certifications;
