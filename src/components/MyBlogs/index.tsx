import React, { ReactElement, useState, useEffect } from "react";
import {BlogPost, getAllPosts, getHashnodePostIterator} from "blogmon"
import Blog from "../Blog";
import commonStyles from "../../styles/common.module.scss";
import { Blog as IBlog } from "../Blog/Blog.interface";
import LoadingIndicator from "../LoadingIndicator";

interface Props {}

const hashnode = getHashnodePostIterator({userName: "arunmurugan"});

const blogPostAdapter = (source: string) => 
      (blogPost: BlogPost): IBlog => 
              ({
                url: blogPost.url,
                createdAt: blogPost.dateAdded.toISOString(),
                source,
                ...blogPost
              })
        
const hashNodeBlogPostAdapter = blogPostAdapter("arunmurugan.hashnode.dev")
const devtoBlogPostAdapter = blogPostAdapter("dev.to")


function MyBlogs({}: Props): ReactElement {
  const [fetchedAllBlogs, setFetchedAllBlogs] = useState(false);
 
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<IBlog[]>([]);


  useEffect(() => {
    setLoading(true);
    hashnode.nextPage().then(async (fetchedBlogs) => {
      if (fetchedBlogs) {
        setBlogs(blogs => [...blogs, ...fetchedBlogs.map(hashNodeBlogPostAdapter)]);
      } else {
        // I have only like one blog post on dev.to, I don't plan on posting there hereafter.
        // So wont cause any problem.
        fetchedBlogs = await getAllPosts({devtoUserName: "arunmurugan78"})
        setBlogs(blogs => [...blogs, ...fetchedBlogs.map(hashNodeBlogPostAdapter)]);
        setFetchedAllBlogs(true);
      }
      
      setLoading(false);
    })
  }, [page]);
  return (
    <div>
      <div>
        {blogs.map((o, i) => {
          return <Blog key={i} {...o} />;
          1;
        })}
      </div>

      {fetchedAllBlogs || loading ? null : (
        <button
          disabled={loading}
          style={{ marginTop: "20px" }}
          className={commonStyles.showMoreText}
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
