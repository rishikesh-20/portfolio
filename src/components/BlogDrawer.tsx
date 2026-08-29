import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { PortableText } from "@portabletext/react";
import { urlFor, Post } from "../lib/sanity";

interface Props {
  post: Post | null;
  onClose: () => void;
}

const components = {
  types: {
    image: ({ value }: any) => {
      const url = urlFor(value)?.width(1400).fit("max").auto("format").url();
      if (!url) return null;
      return (
        <figure className="blog-post-figure">
          <img src={url} alt={value.alt || ""} loading="lazy" />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
  },
};

function BlogDrawer({ post, onClose }: Props) {
  const [full, setFull] = useState(false);

  // Always reopen at panel width, so the last post's choice isn't inherited.
  useEffect(() => {
    if (!post) setFull(false);
  }, [post]);

  const cover =
    post?.coverImage &&
    urlFor(post.coverImage)?.width(1400).fit("max").auto("format").url();

  return (
    <Drawer
      anchor="right"
      open={Boolean(post)}
      onClose={onClose}
      className={`blog-drawer${full ? " is-full" : ""}`}
    >
      <div className="blog-drawer-inner">
        <div className="blog-drawer-actions">
          <Tooltip title={full ? "Exit full page" : "View full page"} arrow>
            <IconButton onClick={() => setFull((v) => !v)} aria-label={full ? "Exit full page" : "View full page"}>
              {full ? <CloseFullscreenIcon /> : <OpenInFullIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Close" arrow>
            <IconButton onClick={onClose} aria-label="Close post">
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </div>

        {post && (
          <article className="blog-post">
            {cover && (
              <div className="blog-drawer-cover">
                <img src={cover} alt="" />
              </div>
            )}
            <p className="blog-date">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <h2>{post.title}</h2>
            <div className="blog-post-body">
              {post.body && <PortableText value={post.body} components={components} />}
            </div>
          </article>
        )}
      </div>
    </Drawer>
  );
}

export default BlogDrawer;
