import '../css/Home.css';
import { Link } from 'react-router-dom';
// import React from 'react';
import Navigation from '../component/common/Navbar';
import Header from '../component/home/Header';
import Internship from '../component/home/Internship';
import Project from '../component/home/Project';
import Footer from '../component/common/Footer';
import Fireworks from '../component/home/Firework';


// function Home() {
//     return (
//         <>
//             <div className='home-header-pic-container'>
//                 <div className='home-header-pic-mask'>
//                     <Navigation />
//                     <div className='text-start home-header-text'>
//                         <h1>
//                             <span className='home-header-name'>ZHANG Haoxiang (Gavin)</span>
//                             <br></br>
//                             <span className='home-header-major'>Quantitative Finance and Risk Management</span>
//                         </h1>
//                     </div>
//                 </div>
//             </div>
//             <div className='home-body-container'>
//                 <h1>
//                     Personal Profile
//                 </h1>
//                 <p style={{ marginTop: '30px' }}>
//                     Being a multitasker who is not only good at risk management but also
//                     talented in time management, paperwork, communication, coding, and
//                     various tasks, I can deal with the stress even under CUHK courses
//                     and NTU exchange while managing 5 associations and organizing
//                     voluntary teams simultaneously. I would like to take on the coming
//                     challenges and innovations to embrace the goal of joining the
//                     financial industry.
//                 </p>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default Home;


const Home = () => {
  return (
    <div className="home-container">
      <Navigation />
      <Header />
      <Internship />
      {/* <Project /> */}
      {/* <Fireworks /> */}
      {/* create a button link to Birthday and using Router Link */}
      <Footer />
    </div>
  );
};

export default Home;