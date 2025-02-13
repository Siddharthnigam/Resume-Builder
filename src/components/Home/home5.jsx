import React from 'react'
import Success from '../Images/success.png'

export default function home5() {
  return (
    <>
    <div className='home5'>
    <br />
    <center><h1>A.T.S Friendly Resume's</h1></center><br />
    <div className="home51">
        <div className="hom1">
            <ul>
                <h2>Here are some benefits of creating an ATS-friendly resume:-</h2><br /><hr /><hr /><br />
                <li><b>Increased Visibility:</b> ATS-friendly resumes are designed to be easily read by Applicant Tracking Systems, which means your resume is more likely to get through initial screenings and reach human recruiters.</li>
              <br />  <li><b>Higher Relevance:</b> By focusing on relevant skills, experiences, and achievements, ATS-friendly resumes ensure that only the most pertinent information is highlighted, increasing your chances of being shortlisted.</li>
             <br />   <li><b>Professional Appearance:</b> These resumes often follow industry standards and templates, giving your application a polished and professional look.</li>
           <br /> <li><b>Structured Formatting: </b>These resumes use clear and structured formatting, ensuring that the essential information is easily accessible and not lost in creative designs that ATS might not recognize.</li>
           <br /> <hr /><hr />
            </ul>
        </div>


        <div className="hom2">
<center><img src={Success} alt="" /></center>
<br />
   <center><h2>Your Success is Waiting Let's go Together...</h2></center>
        </div>

    </div>
    
   
    <br /><br />
    
    
  </div>
  </>
  )
}
