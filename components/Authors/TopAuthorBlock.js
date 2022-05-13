import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function TopAuthorBlock({ author }) {
  const getImageURL = (title) => {
    return `https://og.bugblogs.tech/${title}.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fucarecdn.com%2Fcdc7a226-83a7-434d-95b6-66c93d276c24%2F`;
  };

  return (
    <div className="block">
      <div className="aspect-w-1 aspect-h-1">
        <img
          loading="lazy"
          alt={author?.name}
          className="object-cover rounded"
          src={getImageURL(`👋 Hey! ${author?.name}`)}
        />
      </div>

      <div className="mt-2">
        <h5 className="font-medium">
          {author.name ? author.name : "Anonymous"}
        </h5>

        <a
          className="mt-1 text-sm text-gray-400 hover:text-gray-100 transition-colors "
          href={`/authors/${author.id}`}
        >
          {" "}
          Learn More
          <AiOutlineArrowRight className="inline-block ml-1" />
        </a>
      </div>
    </div>
  );
}

export default TopAuthorBlock;
