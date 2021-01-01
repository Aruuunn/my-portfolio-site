import React, { ReactElement } from "react";
import Helmet from "react-helmet";

interface Props {
  title?: string;
}

function Header(props: Props): ReactElement {
  const { title } = props;
  return (
    <div>
      <Helmet>
        <title>{title || "Arun Murugan"}</title>

        {/* Load required fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#2D2E32" />
      </Helmet>
    </div>
  );
}

export default Header;
