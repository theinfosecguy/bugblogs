import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="min-h-screen text-white dark-bg">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center flex min-h-screen items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl bg-clip-text text-white">
              Learn, <span className="grad-text">Explore</span> & Hack
              <span className="sm:block">
                with <span className="grad-text">Bug Blogs</span>
              </span>
            </h1>

            <p className="max-w-xl mx-auto mt-8 sm:leading-relaxed xl:text-lg md:text-xs">
              BugBlogs is a open source project that aims to help security
              researchers learn, explore and hack.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                className="hover:bg-gradient-to-r from-blue-500 to-purple-600 btn-home rounded-2xl relative inline-flex items-center px-8 py-3 overflow-hidden text-white group border border-blue-500 hover:border-transparent"
                href="/posts"
              >
                <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-md font-medium transition-all group-hover:mr-4">
                  Start Learning
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
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
