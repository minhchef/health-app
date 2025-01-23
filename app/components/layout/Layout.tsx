import Footer from "../footer/Footer";
import Header from "../header/Header";
import ScrollToTop from "../scroll/ScrollToTop";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex justify-between flex-col min-h-screen mt-10">
        {children}
        <footer>
          <ScrollToTop />
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Layout;
