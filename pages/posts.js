import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ posts }) {
  const getImageURL = (title) => {
    // const apiURL = "https://og.bugblogs.tech/api/image";
    // return `${apiURL}?fileType=png&layoutName=Blog&Theme=Dark&Title=${title}&Author=${author}`;
    return `https://og-image-i3gxbp1u9-not-so-great-team.vercel.app/${title}.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fucarecdn.com%2Fcdc7a226-83a7-434d-95b6-66c93d276c24%2F`;
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-8 md:p-2">
        {posts.map(({ slug, frontmatter }, index) => (
          <div
            key={index}
            className="border border-gray-700 m-4 rounded-xl shadow-lg overflow-hidden"
          >
            <Link href={`/post/${slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={getImageURL(frontmatter?.title, frontmatter?.Author)}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
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
