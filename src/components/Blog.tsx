import React, { useEffect, useState } from "react";
import BlogDrawer from "./BlogDrawer";
import {
  sanityClient,
  isSanityConfigured,
  urlFor,
  POSTS_QUERY,
  Post,
} from "../lib/sanity";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SectionHeading from "./SectionHeading";
import "../assets/styles/Rows.scss";
import "../assets/styles/Blog.scss";

function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [active, setActive] = useState<Post | null>(null);

  useEffect(() => {
    if (!sanityClient) return;
    let cancelled = false;
    sanityClient
      .fetch<Post[]>(POSTS_QUERY)
      .then((result) => {
        if (!cancelled) setPosts(result);
      })
      .catch(() => {
        if (!cancelled) setPosts([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="blog-container" id="blog">
      <SectionHeading top="Notes &" bottom="Thoughts" />

      {!isSanityConfigured && (
        <p className="blog-empty">
          Blog is not connected yet. Add your Sanity project ID to <code>.env</code>.
        </p>
      )}

      {isSanityConfigured && posts.length === 0 && (
        <p className="blog-empty">No posts yet.</p>
      )}

      <div className="section-rows">
        {posts.map((post) => {
          const thumb =
            post.coverImage &&
            urlFor(post.coverImage)?.width(400).height(300).fit("crop").auto("format").url();

          return (
            <button
              key={post._id}
              className="section-row"
              onClick={() => setActive(post)}
            >
              {thumb && (
                <div className="section-row-thumb">
                  <img src={thumb} alt="" loading="lazy" />
                </div>
              )}
              <div className="section-row-body">
                <h2 className="section-row-title">{post.title}</h2>
                {post.blurb && <p className="section-row-text">{post.blurb}</p>}
                <div className="section-row-meta">
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <ArrowOutwardIcon className="section-row-arrow" />
            </button>
          );
        })}
      </div>

      <BlogDrawer post={active} onClose={() => setActive(null)} />
    </div>
  );
}

export default Blog;
