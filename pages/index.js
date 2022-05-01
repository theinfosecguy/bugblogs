import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <section className="min-h-screen text-white dark-bg">
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl bg-clip-text text-white">
        Learn,{' '}
            <span className="grad-text">Explore</span>
            {' '}& Hack
            <span className="sm:block">
          with{' '}
              <span className="grad-text">
            Bug Blogs
              </span>
            </span>
          </h1>

          <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
        BugBlogs is a open source project that aims to help security researchers learn, explore and hack.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/posts">
              <button className="font-semibold py-2 px-4 border rounded shadow">
          Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
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



