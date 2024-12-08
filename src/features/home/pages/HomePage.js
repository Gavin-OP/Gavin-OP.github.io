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
    <div className="home-container">
      <MainLayout showNav>
        <Header />
        <Internship />
        <Project />
        {/* <Fireworks /> */}
        {/* create a button link to Birthday and using Router Link */}
      </MainLayout>

    </div>
  );
};

export default HomePage;
