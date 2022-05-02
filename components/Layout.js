import Link from "next/link";
import Footer from "./Footer";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="dark-bg flex flex-col min-h-screen">
      <header className="dark-bg mb-8 py-4 pl-4">
        <div className="container mx-auto flex justify-center">
          <Link href="/" passHref>
            <Image
              width={40}
              height={40}
              alt="BugBlogs Logo"
              src="/logo1.svg"
            />
          </Link>
          Bug Blogs
          <span className="mx-auto">Welcome to my blog</span>{" "}
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <Footer />
    </div>
  );
}
