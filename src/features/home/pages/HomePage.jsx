import MainLayout from "../../../component/layout/MainLayout";
import Header from "../components/Background";
import Internship from "../components/Internship";
import Project from "../components/Project";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <MainLayout showNav>
        <Header />
        <Internship />
        <Project />
      </MainLayout>
    </div>
  );
};

export default HomePage;
