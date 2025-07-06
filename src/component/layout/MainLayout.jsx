import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/MainLayout.css";

const MainLayout = ({ children, showNav = true }) => {
  return (
    <div className="layout">
      {showNav && <Navbar />}
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
