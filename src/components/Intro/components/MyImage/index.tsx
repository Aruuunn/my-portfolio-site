import React, { ReactElement } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

interface Props {
  size?: number;
}

function MyImage(props: Props): ReactElement {
  const { size } = props;
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div style={{ height: `${size || 200}px`, width: `${size || 200}px` }}>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  );
}

export default MyImage;
