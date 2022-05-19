import React from "react";
import { authorsList } from "../../authors/authors";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import fs from "fs";
import matter from "gray-matter";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import Head from "next/head";
import { validateURL, getImageURL } from "../../utils/index";
import PostCard from "../../components/Posts/PostCard";
import SEO from "../../components/Seo";

function AuthorDetails({ author, filteredPosts }) {
  const grad = {
    backgroundColor: "#861657",
    backgroundImage: "linear-gradient(326deg, #861657 0%, #ffa69e 74%)",
  };

  return (
    <div className="dark-bg">
      <SEO
        title={`Hi! I am ${author.name}`}
        description={author.bio ?? ""}
        canonical={`https://bugblogs.tech/authors/${author.id}`}
      />
      <Head>
        {author.buymeacoffeeUsername && (
          <script
            data-name="BMC-Widget"
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id={author.buymeacoffeeUsername}
            data-description="Support me on Buy me a coffee!"
            data-message=""
            data-color="#FF813F"
            data-position="Right"
            data-x_margin="18"
            data-y_margin="18"
          ></script>
        )}
      </Head>
      <Navbar />
      <section className="relative pt-12 w-full flex flex-col items-center">
        <div
          className="white-shadow relative w-[80%] h-[250px] mx-auto bg-white rounded-lg shadow-lg p-8"
          style={grad}
        ></div>
        <img
          className="author-avatar white-shadow"
          src={
            author.image
              ? author.image
              : "https://ucarecdn.com/4b2f8425-7082-4b67-acfe-16ecce553f24/"
          }
          alt="Author Avatar"
        />
        <div className="author-details mt-24 text-center w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white">
            👋 Hey! I&apos;m {author?.name || "Unknown"}
          </h1>
          <p className="text-gray-200 text-md mt-12 xl:text-lg lg:text-xl xl:w-3/4 lg:w-[85vw] sm:w-[95vw]">
            {author?.description}
          </p>
          <div className="my-8 flex">
            {author.social.github && (
              <a
                href={validateURL(author.social.github)}
                className="author-social-link mx-2"
              >
                {" "}
                <AiFillGithub size={40} />
              </a>
            )}
            {author.social.twitter && (
              <a
                href={validateURL(author.social.twitter)}
                className="author-social-link mx-2"
              >
                {" "}
                <AiFillTwitterCircle size={40} />
              </a>
            )}
            {author.social.linkedin && (
              <a
                href={validateURL(author.social.linkedin)}
                className="author-social-link mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <AiFillLinkedin size={40} />
              </a>
            )}
          </div>
        </div>
      </section>
      <section className="my-12 relative w-full flex flex-col author-posts">
        <h1 className="text-2xl font-bold text-white text-left px-12">
          My Posts
        </h1>
        {filteredPosts.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:p-2 w-full xl:grid-cols-2">
            {filteredPosts.map(({ slug, frontmatter }, index) => (
              <PostCard slug={slug} frontmatter={frontmatter} key={index} />
            ))}
          </div>
        ) : (
          <p className="text-center w-full text-white text-lg my-12">
            No posts found
          </p>
        )}
      </section>
      <Footer />
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const author = authorsList.find((author) => author.id === params.id);
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

  const filteredPosts = posts.filter(
    (post) => post.frontmatter.AuthorId === params.id
  );

  return {
    props: {
      authorID: params.id,
      author,
      filteredPosts,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = authorsList.map((author) => ({
    params: {
      id: author.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default AuthorDetails;
