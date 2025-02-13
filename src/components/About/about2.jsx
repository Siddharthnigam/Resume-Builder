import React, { useState } from 'react';
import './about.css'

function About2() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you can handle the form submission, e.g., send the data to a server
  };

  return (
    <div>
      <div className="about2">
        <div className="ab1">
          <h1>Why GreatResume's?</h1><br />
          <ul>
            <li>Easy-to-use interface</li>
            <li>Wide range of customizable templates</li>
            <li>Real-time editing and preview</li>
            <li>Secure and private</li>
            <li>Login-free and easy to use</li>
            <li>24/7 customer support</li>
          </ul><br />

          <h1>Get Started Today!</h1>
          <h2>
            Ready to take the next step in your career? Make resumes at GreatResumes.io today and start building your perfect resume. With our comprehensive tools and resources, your dream job is just a few clicks away.
          </h2>
          <h2>
            Join thousands of satisfied users and experience the difference with GreatResumes.io. Let's make your resume stand out from the crowd!
          </h2>
        </div>

        <div className="ab2">
        <center>  <h1>Any Suggetions About Us??</h1></center>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About2;
