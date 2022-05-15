import fs from "fs";
import matter from "gray-matter";
import Layout from "../components/Layout";
import PostCard from "../components/Posts/PostCard";

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:p-2 w-full xl:grid-cols-3">
          {posts.map(({ slug, frontmatter }, index) => (
            <PostCard slug={slug} frontmatter={frontmatter} key={index} />
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
