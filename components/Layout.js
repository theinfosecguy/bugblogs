import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="dark-bg flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto flex-1 pt-8 px-12">{children}</main>
        <Footer />
      </div>
    </>
  );
}
