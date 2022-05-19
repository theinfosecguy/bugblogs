import { DefaultSeo, NextSeo, NextSeoProps } from "next-seo";
import Head from "next/head";

const title = "Bug Blogs: Open Source Blogs for Security Enthusiasts";
export const url = "https://bugblogs.tech";
const description =
  "BugBlogs is an Open-Source blog project that aims to help security researchers learn, explore and hack. It is maintained by a group of developers who are passionate about security.";
const image = "https://bugblogs.tech/og.png";

const config = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    site_name: title,
    images: [{ url: image }],
    article: {
      authors: [],
    },
  },
};

const SEO = ({ image, author, ...props }) => {
  const title = props.title ?? config.title;
  const description = props.description || config.description;

  return (
    <>
      <DefaultSeo {...config} />

      <NextSeo
        {...props}
        {...(image == null
          ? {}
          : {
              openGraph: {
                images: [{ url: image }],
                article: {
                  authors: [author],
                },
              },
            })}
      />

      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
      </Head>
    </>
  );
};

export default SEO;
