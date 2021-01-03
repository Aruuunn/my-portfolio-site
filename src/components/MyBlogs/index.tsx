import React, { ReactElement } from "react";

import Blog from "../Blog";

interface Props {}

function MyBlogs({}: Props): ReactElement {
  const myBlogs: Parameters<typeof Blog>[0][] = [
    {
      title: "Linkedlist , Why , What and How",
      description:
        "Culpa sint dolore non et aliqua et dolore nisi nulla elit elit mollit nostrud.",
      source: "Medium",
      tags: ["ll", "linkedlist", "data structure", "dsa"],
      url:
        "https://stackoverflow.com/questions/51851677/how-to-get-argument-types-from-function-in-typescript",
    },
  ];
  return (
    <div>
      {myBlogs.map((o, i) => {
        return <Blog key={i} {...o} />;
      })}
    </div>
  );
}

export default MyBlogs;
