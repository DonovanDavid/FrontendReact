import './Home.css';
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import About from '../../about/about';
import Gallery from '../../slider/Gallery';
import { Proyects_Information } from '../../data/Data_information_1';
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>

    <section data-aos="fade-right" id='Home' className="sectionHome">
      <div className="wrap">
        <div className="rigth-Home">
          <h1>Mejores soluciones para tu negocio</h1>
        </div>
        <div className="left-Home">
          <img
       
             className="animated-img"
            alt=""
            src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png"
          />
        </div>
      </div>
    </section>


    <Gallery slides={Proyects_Information}/>
    <About/>
    
    </>
  );
}

export default Home;
