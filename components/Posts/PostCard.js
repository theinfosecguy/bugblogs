import React from "react";
import { getImageURL, findAuthor } from "../../utils/index";

export default function PostCard({ slug, frontmatter }) {
  return (
    <a
      className="relative block bg-black group mx-4 mb-12 h-[260px] rounded-xl"
      href={`/post/${slug}`}
    >
      <img
        className="rounded-xl absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
        src={getImageURL(frontmatter?.title, frontmatter?.Author)}
        alt=""
      />
      <div className="relative p-8">
        <p className="text-xs font-medium tracking-widest text-pink-500 uppercase">
          Author
        </p>

        <p className="text-lg font-bold text-white">
          {frontmatter.AuthorId
            ? findAuthor(frontmatter.AuthorId)?.name || "Anonymous"
            : "Anonymous"}
        </p>
      </div>
    </a>
  );
}
