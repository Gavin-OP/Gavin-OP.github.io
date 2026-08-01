import '../styles/Home.css';
import MainLayout from '../../../component/layout/MainLayout.js';
// import Navigation from '../../../component/layout/Navbar.js';
// import Footer from '../../../component/layout/Footer.js';
import Header from '../components/Background.js';
import Internship from '../components/Internship.js';
import Project from '../components/Project.js';
// import Fireworks from '../component/home/Firework';


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
