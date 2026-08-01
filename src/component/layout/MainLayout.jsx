import Navbar from "./Navbar";
import Footer from "./Footer";
import "./MainLayout.scss";

const MainLayout = ({ children, showNav = true }) => {
  return (
    <div className="main-layout">
      {showNav && <Navbar />}
      <main className="main-layout__content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
