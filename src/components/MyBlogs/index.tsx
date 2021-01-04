import React, { ReactElement, useState, useEffect, useContext } from "react";
import firebase from "firebase";

import { FirebaseContext } from "../../firebase.provider";
import Blog from "../Blog";
import commonStyles from "../../styles/common.module.scss";
import { Blog as IBlog } from "../Blog/Blog.interface";
import LoadingIndicator from "../LoadingIndicator";
import fetchBlogs from "../../utils/fetch.blogs";

interface Props {}

function MyBlogs({}: Props): ReactElement {
  const { db } = useContext(FirebaseContext);
  const LIMIT = 10;
  const [fetchedAllBlogs, setFetchedAllBlogs] = useState(false);
  const [lastSnapShot, setLastSnapShot] = useState<
    firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
  >();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  useEffect(() => {
    setLoading(true);
    if (db)
      fetchBlogs(db, LIMIT, lastSnapShot).then(({ blogs, lastSnapShot }) => {
        setLoading(false);
        if (blogs.length === 0) {
          setFetchedAllBlogs(true);
        }
        setLastSnapShot(lastSnapShot);
        setBlogs((s) => [...s, ...blogs]);
      });
  }, [page]);
  return (
    <div>
      {blogs.map((o, i) => {
        return <Blog key={i} {...o} />;
        1;
      })}

      {fetchedAllBlogs || loading ? null : (
        <button
          disabled={loading}
          style={{ marginTop: "10px" }}
          className={commonStyles.textButton}
          onClick={() => setPage((s) => s + 1)}
        >
          Load More
        </button>
      )}
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadingIndicator />
        </div>
      ) : null}
    </div>
  );
}

export default MyBlogs;
