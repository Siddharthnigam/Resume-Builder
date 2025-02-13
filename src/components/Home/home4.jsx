import "./home.css";
import React, { useState } from "react";
import Camera from '../Images/camera.png';
import Bag from '../Images/bag.png'
import Timer from '../Images/timer.png'

export default function App() {
    const [pupilTop, setPupilTop] = useState("50%");
    const [pupilLeft, setPupilLeft] = useState("50%");
    const [pupilTransform, setPupilTransform] = useState("translate(-50%, -50%)");

    function handleMouseMove(event) {
        let x = (event.clientX * 100) / window.innerWidth + "%";
        let y = (event.clientY * 100) / window.innerHeight + "%";
        setPupilLeft(x);
        setPupilTop(y);
        setPupilTransform(`translate(-${x},-${y})`);
    }
    return (
        <div className="head3">
            <div className="container1" onMouseMove={(event) => handleMouseMove(event)}>
                <br /><br />  <h1>Get Seen By Recruiter's Eyes Easily by Creating Resume with Great Resume's.io</h1>
                <br /><br /><br /><br /><br />
                <div className="eyes">
                    <div className="eye">
                        <div
                            className="pupil1"
                            style={{
                                top: pupilTop,
                                left: pupilLeft,
                                transform: pupilTransform
                            }}
                        ></div>
                    </div>

                    <div className="eye">
                        <div
                            className="pupil1"
                            style={{
                                top: pupilTop,
                                left: pupilLeft,
                                transform: pupilTransform
                            }}
                        ></div>
                    </div>
                </div>
                <div className="sid3">
                    <div className="first">
                        <img src={Camera} alt="" />
                        <p>Recruiter-Approved <br />Resume</p><br />
                        <p className="papa">We work with recruiters to design resume templates that format automatically.</p>
                    </div>
                    <div className="first">
                        <img src={Timer} alt="" />
                        <p>Finish Your Resume <br /> in 15 Minutes</p><br />
                        <p className="papa">Resume Now helps you tackle your work experience by reminding you what you did at your job.</p>

                    </div>
                    <div className="first">
                        <img src={Bag} alt="" />
                        <p>Land an Good <br /> Interview</p><br />
                        <p className="papa">We suggest the skills you should add. It helped over a million people get interviews.</p>

                    </div>


                </div>
            </div>
            <br /><br />
        </div>
    );
}
