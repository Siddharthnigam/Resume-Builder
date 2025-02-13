import React, { useState } from 'react';
import './tempelate2.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        addreas: '',
        phone: '',
        objective:'',
        education: [{ qualification: '', school: '', year: '', percentage: '' }],
        experience: [{ title: '', company: '', dates: '' }],
        skills: [''],
        photo: null // Added state for photo
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleArrayChange = (e, index, type) => {
        const { name, value } = e.target;
        const updatedArray = formData[type].map((item, i) =>
            type === 'skills' ? (i === index ? value : item) : (i === index ? { ...item, [name]: value } : item)
        );
        setFormData({ ...formData, [type]: updatedArray });
    };

    const handleAddField = (type) => {
        const newField = type === 'skills' ? '' : { degree: '', school: '', year: '' };
        setFormData({ ...formData, [type]: [...formData[type], newField] });
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, photo: URL.createObjectURL(file) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // For debugging purposes
    };

    const changeBackgroundColor = (color) => {
        const headers = document.getElementsByClassName('header');
        for (let i = 0; i < headers.length; i++) {
            headers[i].style.backgroundColor = color;
        }
    };

    const handleDownload = () => {
        const input = document.getElementById('resume-template');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF(); 
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('resume.pdf');
        });
    };

    return (
        <>
            <div className="nahru">
                <section>
                    <form onSubmit={handleSubmit} className="resume-form">
                        <div className="color">
                            <button onClick={() => changeBackgroundColor('#6f1d1b')}>
                                Red
                            </button>
                            <button onClick={() => changeBackgroundColor('#354f52')}>
                                Green
                            </button>
                            <button onClick={() => changeBackgroundColor('#03045e')}>
                                Blue
                            </button>
                            <button onClick={() => changeBackgroundColor('#f77f00')}>
                                Yellow
                            </button>
                            <button onClick={() => changeBackgroundColor('#582f0e')}>
                                Brown
                            </button>
                            <button onClick={() => changeBackgroundColor('#343a40')}>
                                Grey
                            </button>
                        </div>
                        <div>
                            <h3>Personal Details</h3>
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Addreas:</label>
                            <input type="text" name="addreas" value={formData.addreas} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Photo:</label>
                            <input type="file" onChange={handlePhotoUpload} />
                            {formData.photo && <img src={formData.photo} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
                        </div>
                        <div>

                        <div>
                        
                            <label>Objective:</label>
                            <input type="text" name="objective" value={formData.objective} onChange={handleChange} />                        
                        </div>
                                                    <h3>Education</h3>
                            {formData.education.map((edu, index) => (
                                <div key={index}>
                                    <label>Qualification:</label>
                                    <input type="text" name="qualification" value={edu.qualification} onChange={(e) => handleArrayChange(e, index, 'education')} />
                                    <label>School:</label>
                                    <input type="text" name="school" value={edu.school} onChange={(e) => handleArrayChange(e, index, 'education')} />
                                    <label>Year:</label>
                                    <input type="text" name="year" value={edu.year} onChange={(e) => handleArrayChange(e, index, 'education')} />
                                    <label>Percentage:</label>
                                    <input type="text" name="percentage" value={edu.percentage} onChange={(e) => handleArrayChange(e, index, 'education')} />
                                </div>
                            ))}
                            <button type="button" onClick={() => handleAddField('education')}>Add Education</button>
                        </div>
                        <div>
                            <h3>Experience</h3>
                            {formData.experience.map((exp, index) => (
                                <div key={index}>
                                    <label>Title:</label>
                                    <input type="text" name="title" value={exp.title} onChange={(e) => handleArrayChange(e, index, 'experience')} />
                                    <label>Company:</label>
                                    <input type="text" name="company" value={exp.company} onChange={(e) => handleArrayChange(e, index, 'experience')} />
                                    <label>Dates:</label>
                                    <input type="text" name="dates" value={exp.dates} onChange={(e) => handleArrayChange(e, index, 'experience')} />
                                </div>
                            ))}
                            <button type="button" onClick={() => handleAddField('experience')}>Add Experience</button>
                        </div>
                        <div>
                            <h3>Skills</h3>
                            {formData.skills.map((skill, index) => (
                                <div key={index}>
                                    <input type="text" name="skill" value={skill} onChange={(e) => handleArrayChange(e, index, 'skills')} />
                                </div>
                            ))}
                            <button type="button" onClick={() => handleAddField('skills')}>Add Skill</button>
                        </div>
                        <button type="button" onClick={handleDownload}>Download Resume</button>
                    </form>
                </section>
                <ResumeTemplate formData={formData} />
            </div>
        </>
    );
};

const ResumeTemplate = ({ formData }) => {
    return (
        <>
            <div className="container" id="resume-template">
                <div className="header">
                    <div>
                        <h1>Personal Details</h1><br />
                        {formData.photo && <img src={formData.photo} alt="Profile" style={{ width: '100px', height: '100px' }} />}
                        <h1 className='h'>{formData.name}</h1>
                        <p>Email: {formData.email}</p>
                        <p>Phone: {formData.phone}</p>
                        <p>Addreas: {formData.addreas}</p>
                    </div><br />
                </div>


                <div className="section2">
                <h1>Carreer Objective</h1>
                <h3>Objective: {formData.objective}</h3>
                </div><br /><hr />
                <div className="section2">
                    <h1>Education</h1>
                    <ul>
                        {formData.education.map((edu, index) => (
                            <li key={index}>
                                <strong>{edu.qualification}</strong> | {edu.school} | {edu.year} | {edu.percentage}
                            </li>
                        ))}
                    </ul>
                </div><br /><hr />
                <div className="section2">
                    <h1>Experience</h1>
                    <ul>
                        {formData.experience.map((exp, index) => (
                            <li key={index}>
                                <strong>{exp.title}</strong> | {exp.company} | {exp.dates}
                            </li>
                        ))}
                    </ul>
                </div><br /><hr />
                <div className="section2">
                    <h1>Skills</h1>
                    <ul>
                        {formData.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ResumeForm;
