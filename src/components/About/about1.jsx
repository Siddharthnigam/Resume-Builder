import React from 'react';
import './about.css'; // Import your custom styles
import Sid from '../Images/sid.jpg'

const About = () => {
  return (
    <>
    <div className="about">
    <div className="about-container">
        <br /><br />
      <h1>About GreatResume's</h1><br /><br />
      <h2>
        Welcome to GreatResumes.io, one of the best resume builder websites on the internet. Our platform is the most simple and unique, and it is login-free, making it very easy to use.
      </h2><br /><center><hr /></center><br />
      <h1>Our Mission</h1><br /><br />
      <h2>
        At GreatResumes.io, we believe that everyone deserves a chance to shine in their professional journey. Our mission is to provide a user-friendly platform that enables job seekers to create, customize, and download high-quality resumes with ease. Whether you're a recent graduate or a seasoned professional, our tools are designed to cater to your unique needs.
      </h2><br /><center><hr /></center>
     
     
    </div>
    <div className="cont">
      <br /><br /><br /><img src={Sid} alt="" />
      <h1>Siddharth Nigam</h1>
      <h2>(Co-Founder)</h2>
    </div>

    </div>
    </>
  );
};

export default About;
