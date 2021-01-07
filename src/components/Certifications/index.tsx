import React, { ReactElement, useState } from "react";
import { Link } from "gatsby";

import commonStyles from "../../styles/common.module.scss";
import styles from "./styles.module.scss";
import { InsideMultilineCommentLikeText } from "../../components";
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
            <div key={i} className={styles.cert}>
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
              <Link
                target="_blank"
                about="Link to Certificate"
                className={commonStyles.link}
                rel="noopener"
                to={o.url}
              >
                <svg
                  width="37"
                  height="37"
                  style={{ height: "25px", width: "30px" }}
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.0426 3.68801C31.9966 3.68947 31.9508 3.69349 31.9053 3.70006H24.6667C24.5033 3.69775 24.341 3.72794 24.1893 3.78888C24.0377 3.84983 23.8996 3.94031 23.7832 4.05506C23.6669 4.16982 23.5744 4.30656 23.5113 4.45734C23.4483 4.60813 23.4158 4.76994 23.4158 4.93339C23.4158 5.09684 23.4483 5.25866 23.5113 5.40944C23.5744 5.56022 23.6669 5.69697 23.7832 5.81172C23.8996 5.92648 24.0377 6.01696 24.1893 6.0779C24.341 6.13884 24.5033 6.16904 24.6667 6.16672H29.0893L16.3947 18.8614C16.2763 18.975 16.1818 19.1112 16.1167 19.2618C16.0516 19.4124 16.0172 19.5745 16.0155 19.7386C16.0139 19.9027 16.045 20.0654 16.107 20.2174C16.169 20.3693 16.2607 20.5073 16.3767 20.6233C16.4928 20.7394 16.6308 20.8311 16.7827 20.8931C16.9346 20.9551 17.0974 20.9862 17.2615 20.9845C17.4256 20.9829 17.5877 20.9485 17.7383 20.8834C17.8889 20.8183 18.025 20.7238 18.1387 20.6054L30.8333 7.91074V12.3334C30.831 12.4968 30.8612 12.6591 30.9222 12.8107C30.9831 12.9624 31.0736 13.1004 31.1884 13.2168C31.3031 13.3332 31.4398 13.4256 31.5906 13.4887C31.7414 13.5518 31.9032 13.5843 32.0667 13.5843C32.2301 13.5843 32.3919 13.5518 32.5427 13.4887C32.6935 13.4256 32.8303 13.3332 32.945 13.2168C33.0598 13.1004 33.1502 12.9624 33.2112 12.8107C33.2721 12.6591 33.3023 12.4968 33.3 12.3334V5.08997C33.3246 4.9124 33.3101 4.73161 33.2577 4.56019C33.2053 4.38877 33.1161 4.23084 32.9964 4.09739C32.8767 3.96394 32.7294 3.85818 32.5647 3.78748C32.3999 3.71679 32.2218 3.68284 32.0426 3.68801ZM7.40002 8.63339C6.05191 8.63339 4.93335 9.75195 4.93335 11.1001V29.6001C4.93335 30.9482 6.05191 32.0667 7.40002 32.0667H25.9C27.2481 32.0667 28.3667 30.9482 28.3667 29.6001V17.2667V14.087L25.9 16.5537V19.7334V29.6001H7.40002V11.1001H17.2667H19.7333H20.4464L22.913 8.63339H19.7333H17.2667H7.40002Z"
                    className={commonStyles.url}
                  />
                </svg>
              </Link>
            </div>
          );
        })}
        {myCertifications.length > limit ? (
          <button
            className={commonStyles.showMoreText}
            onClick={() => setLimit(myCertifications.length)}
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            Show all my certifications
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Certifications;
