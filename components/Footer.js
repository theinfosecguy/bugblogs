import React from "react";
import Link from "next/link";
import { AiFillTwitterCircle, AiFillGithub, AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className="dark-bg text-white text-center">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex justify-center space-x-6">
            <a
              className="text-white-500 hover:text-opacity-75"
              href="https://twitter.com/bugblogs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <AiFillTwitterCircle size={32} />
            </a>

            <a
              className="text-white-900 hover:text-opacity-75"
              href="https://github.com/theinfosecguy/bugblogs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub size={30} />
            </a>

            <a
              className="text-white-600 hover:text-opacity-75"
              href="mailto:support@bugblogs.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
            >
              <AiFillMail size={30} />
            </a>
          </div>

          <nav className="relative flex flex-wrap justify-center gap-8 p-8 text-sm font-bold border-2 border-white rounded-xl">
            <Link
              className="hover:opacity-75"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </Link>

            <Link
              className="hover:opacity-75"
              href="/sponsor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sponsor
            </Link>

            <Link
              className="hover:opacity-75"
              href="/authors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Authors
            </Link>

            <Link
              className="hover:opacity-75"
              href="/contribute"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute
            </Link>
          </nav>

          <p className="max-w-lg mx-auto text-xs text-gray-500">
            BugBlogs is an Open-Source blog project that aims to help security
            researchers learn, explore and hack. It is maintained by a group of
            developers who are passionate about security. If you have any
            questions, please contact us at
            <a
              href="mailto:support@bugblogs.tech"
              className="text-white-500 hover:text-opacity-75"
            >
              our support email address.
            </a>
            <br />
          </p>
          <p className="text-xs font-medium">
            © {new Date().getFullYear()} | By{" "}
            <Link href="https://github.com/theinfosecguy">theinfosecguy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
