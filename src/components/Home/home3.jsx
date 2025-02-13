import React from 'react';
import './home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import r1 from '../Images/r1.jpg'
import r2 from '../Images/r2.webp'
import r3 from '../Images/r3.jpg'
import r7 from '../Images/r7.jpg'
import r5 from '../Images/r5.jpg'
import r6 from '../Images/r6.jpg'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000
  };

  return (
    <div>
        <div className="home3">
          <br />
         
            
     <div className="main2">
     <div className="imageslider">
      <Slider {...settings}>
        <div >
          <img src={r2} alt="Image 1" />
        </div>
        <div>
        <img src={r1} alt="Image 1" />
  
        </div>
        <div>
        <img src={r3} alt="Image 1" />

        </div>
        <div >
          <img src={r5} alt="Image 1" />
        </div>
        <div >
          <img src={r6} alt="Image 1" />
        </div>
        <div >
          <img src={r7} alt="Image 1" />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </div>



    <div className="con">
      <br />
      <h1 className='animated-text'>Benifits of Having a Good Resume</h1><br />
      <ul>
        <li>A resume is often the first impression you make on potential employers. A polished and professional resume can make a strong positive impact.</li>
       <br /> <li>Your resume is a personal marketing document. It’s your opportunity to sell yourself to potential employers by showcasing your unique skills and experiences.</li>
       <br /> <li>A resume is a great place to document and celebrate your achievements, which can be a confidence booster and a reminder of your successes.</li>
        <br /><li>A well-written resume can help you stand out from the competition and increase your chances of being invited for an interview.</li>
        <br /><li>A good resume highlights your skills, experience, and accomplishments effectively, making it easier for employers to understand your qualifications at a glance.</li>      
      </ul>

    </div>
    
    </div>
    <br /><br />
    </div>

    </div>

    
  );
};

export default ImageSlider;
