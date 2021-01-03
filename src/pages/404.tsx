import React, { ReactElement } from "react";

import { Layout } from "../components";
import "../styles/global.scss";

interface Props {}

function NotFound({}: Props): ReactElement {
  return (
    <Layout title="Page Not Found">
      <h1 style={{ padding: "70px" }}>404 - Page Not Found</h1>
    </Layout>
  );
}

export default NotFound;
