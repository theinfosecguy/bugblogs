import fs from "fs";
import matter from "gray-matter";
import { findAuthor } from "../authors/_helper";
import Layout from "../components/Layout";

export default function Home({ posts }) {
  const getImageURL = (title) => {
    return `https://og.bugblogs.tech/${title}.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fucarecdn.com%2Fcdc7a226-83a7-434d-95b6-66c93d276c24%2F`;
  };

  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:p-2 w-full xl:grid-cols-3">
          {posts.map(({ slug, frontmatter }, index) => (
            <a
              className="relative block bg-black group mx-4 mb-12 h-[260px] rounded-xl"
              href={`/post/${slug}`}
              key={index}
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
          ))}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}
