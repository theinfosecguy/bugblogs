import { DefaultSeo, NextSeo, NextSeoProps } from "next-seo";
import Head from "next/head";

const title = "Bug Blogs: Open Source Blogs for Security Enthusiasts";
export const url = "https://bugblogs.tech";
const description =
  "BugBlogs is an Open-Source blog project that aims to help security researchers learn, explore and hack. It is maintained by a group of developers who are passionate about security.";
const image = "https://bugblogs.tech/og.png";
const keywords = "bugblogs, blog, security, open-source";

const config = {
  title,
  description,
  keywords,
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
  const canonical = props.canonical;
  const keywords = props.keywords || config.keywords;

  console.log(canonical);

  return (
    <>
      <DefaultSeo {...config} />

      <NextSeo
        {...props}
        {...(image == null
          ? {}
          : /* eslint-disable indent */
            {
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
        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
      </Head>
    </>
  );
};

export default SEO;
