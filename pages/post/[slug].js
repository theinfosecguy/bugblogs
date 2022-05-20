import fs from "fs";
import React from "react";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import ReactMarkdown from "react-markdown";
import { AiFillTags } from "react-icons/ai";
import remarkGfm from "remark-gfm";
import GradientBlock from "../../components/Adblocks/GradientBlock";
import {
  findAuthor,
  splitTags,
  generateRandomRGBACode,
} from "../../utils/index";
import SEO from "../../components/Seo";
import { ProgressBar } from "../../components/Posts/ProgressBar";
const Markdoc = require("@markdoc/markdoc");

const mardownParser = (doc) => {
  const ast = Markdoc.parse(doc);
  const contentw = Markdoc.transform(ast);
  return Markdoc.renderers.react(contentw, React);
};

export default function PostPage({ frontmatter, content, slug }) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        author={findAuthor(frontmatter.AuthorId).name ?? "BugBlogs"}
        image={frontmatter.image}
        canonical={`https://bugblogs.tech/${slug}`}
      />
      <div className={proseClass}>
        <ProgressBar />
        <span className="text-white font-bold text-jumbo">
          {frontmatter.title}
        </span>
        <br />
        <p className="mt-8 text-gray-500 text-xl">
          By{" "}
          {frontmatter.AuthorId ? (
            <a
              href={`/authors/${frontmatter.AuthorId}`}
              style={{ color: "pink" }}
            >
              {findAuthor(frontmatter.AuthorId)
                ? findAuthor(frontmatter.AuthorId).name
                : "Anonymous"}
            </a>
          ) : (
            "Anonymous"
          )}
          {frontmatter.Date && <span> · {frontmatter.Date}</span>}
        </p>
        {splitTags(frontmatter.tags).length > 0 ? (
          <p>
            <AiFillTags className="inline-block mr-2" />
            {splitTags(frontmatter.tags).map((tag) => {
              let colors = generateRandomRGBACode();
              return (
                <span
                  key={tag}
                  className="inline-block mr-2 bg-custom-grey mr-2 py-[2px] px-[8px] rounded-lg"
                  style={{
                    color: colors[1],
                    backgroundColor: colors[0],
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </p>
        ) : null}
        {mardownParser(content)}
        <GradientBlock />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const fileName = `posts/${params.slug}.md`;
  const readFile = fs.readFileSync(fileName, "utf-8");
  const slug = params.slug;
  const { data: frontmatter, content } = matter(readFile);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    return {
      params: {
        slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

const proseClass = `prose mx-auto md:text-left mt-12
        prose-headings:font-bold prose-table:border-separate prose-table:border 
        prose-table:overflow-hidden prose-table:border-custom-grey prose-table:rounded-lg 
        prose-thead:bg-custom-grey prose-th:text-white prose-th:py-2 prose-th:px-4 
        prose-tr:border-y-0 prose-tr:text-gray-100 prose-td:py-2 prose-td:px-4 
        prose-blockquote:border prose-blockquote:border-custom-grey prose-blockquote:px-4 
        prose-blockquote:text-xl prose-blockquote:rounded-lg prose-blockquote:leading-10 
        prose-p:text-custom-grey prose-p:leading-loose prose-lead:leading-relaxed 
        prose-li:text-white prose-a:text-indigo-600 prose-a:decoration-wavy prose-a:font-medium 
        hover:prose-a:text-indigo-600 prose-pre:bg-custom-grey prose-pre:text-white 
        prose-pre:text-base prose-pre:leading-loose prose-p:text-white prose-p:leading-loose`;
