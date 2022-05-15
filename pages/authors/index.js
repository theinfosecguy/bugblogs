import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { authorsList } from "../../authors/authors";
import TopAuthorBlock from "../../components/Authors/TopAuthorBlock";

function Authors() {
  return (
    <div className="dark-bg">
      <Navbar />
      <section className="relative w-full flex flex-col items-center min-h-screen xl:p-12 md:p-6">
        {authorsList.length > 0 ? (
          <section>
            <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
                <div className="flex items-center p-8 dark-bg-custom rounded opacity-75">
                  <div className="mx-auto text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-white">
                      Meet Our Authors 👋
                    </h2>

                    <p className="mt-4 text-sm text-gray-200 max-w-[45ch]">
                      Meet the people behind the content on this blog.
                      Contribute now to be one of them!
                    </p>

                    <a
                      href="/posts"
                      className="inline-block px-8 py-3 mt-6 text-sm text-white bg-white text-black rounded white-shadow"
                    >
                      Show Posts
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
                  {authorsList.map((author, index) => {
                    return (
                      index < 3 && (
                        <TopAuthorBlock key={index} author={author} />
                      )
                    );
                  })}
                </div>
              </div>

              <section>
                <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
                  {authorsList.map((author, index) => {
                    return (
                      index > 2 && (
                        <TopAuthorBlock key={index} author={author} />
                      )
                    );
                  })}
                </div>
              </section>
            </div>
          </section>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-white">No Authors Found</h1>
            <p className="mt-4 text-sm text-gray-200 max-w-[45ch]">
              Contribute now to be one of them!
            </p>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Authors;
