import fs from "fs";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { AiFillTags } from "react-icons/ai";
import remarkGfm from "remark-gfm";
import GradientBlock from "../../components/Adblocks/GradientBlock";
import rehypeRaw from "rehype-raw";

export default function PostPage({ frontmatter, content }) {
  // const getImageURL = (title, author = "Anonymous") => {
  //   const apiURL = "https://og.bugblogs.tech/api/image";
  //   // return `${apiURL}?fileType=png&layoutName=Blog&Theme=Dark&Title=${title}&Author=${author}`;
  //   return "https://og-image-i3gxbp1u9-not-so-great-team.vercel.app/Hello%20World.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fucarecdn.com%2Fcdc7a226-83a7-434d-95b6-66c93d276c24%2F";
  // };

  const generateRandomRGBACode = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [`rgba(${r}, ${g}, ${b}, 0.1)`, `rgb(${r}, ${g}, ${b})`];
  };

  const splitTags = (tags) => {
    return tags[0].split(",");
  };

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <div className={proseClass}>
        <span className="text-white font-bold text-jumbo">
          {frontmatter.title}
        </span>
        {/* Add Line Break */}
        <br />
        <p className="mt-8 text-gray-500 text-xl">
          By {frontmatter.Author}
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
        <ReactMarkdown
          components={{
            code: ({ node, ...props }) => (
              <code
                style={{ color: "white" }}
                {...props}
                className="language-const"
              />
            ),
          }}
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>

        <GradientBlock />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const fileName = `posts/${params.slug}.md`;
  const readFile = fs.readFileSync(fileName, "utf-8");
  const { data: frontmatter, content } = matter(readFile);
  return {
    props: {
      frontmatter,
      content,
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
        prose-blockquote:border prose-blockquote:border-custom-grey prose-blockquote:p-8 
        prose-blockquote:text-xl prose-blockquote:rounded-lg prose-blockquote:leading-10 
        prose-p:text-custom-grey prose-p:leading-loose prose-lead:leading-relaxed 
        marker:prose-li:text-custom-grey prose-li:text-custom-grey prose-li:font-medium 
        prose-a:text-indigo-600 prose-a:decoration-wavy prose-a:font-medium 
        hover:prose-a:text-indigo-600 prose-img:border prose-img:border-custom-grey prose-img:p-4 
        prose-img:rounded-lg prose-pre:bg-custom-grey prose-pre:text-white 
        prose-pre:text-base prose-pre:leading-loose prose-p:text-white prose-p:leading-loose`;
