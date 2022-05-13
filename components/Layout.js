import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="dark-bg flex flex-col min-h-screen w-full">
        <Navbar />
        <main className="flex-1 pt-8 xl:px-12 lg:px-8 md:px-2 w-full xl-mx-auto lg-mx-0">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
