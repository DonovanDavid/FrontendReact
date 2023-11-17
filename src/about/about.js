import Aos from "aos";
import "aos/dist/aos.css"
import React,{useEffect} from 'react'
import './about.css'

const About = ({about_me}) => {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (

    <section className="about-us">
    <div className="about-content">
      <div className="about-image">
        <img className="Imagenabout"  src="" alt="About Us" />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          malesuada risus. Sed in efficitur dolor. Nullam vitae nulla ut quam
          suscipit rhoncus. Sed ac odio velit. Fusce interdum nunc in dolor
          elementum vehicula. Sed at justo vel sapien vehicula lacinia.
        </p>
      </div>
    </div>
  </section>
  )
}

export default About