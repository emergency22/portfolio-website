// import React from 'react'
import Image from '../images/200x300.png'

export default function AboutMe() {
    return (
        <div className="aboutMe">
        <div className="aboutMeImageItem">
            <img src={Image} alt="Developer-Image" />
            <p>Full Stack Developer</p>
            <div className="aboutMeImageOverlay">
                <p>Text text text text. Text text text text.</p>
            </div>
        </div>

        <div className="aboutMeImageItem">
            <p>FirstName LastName</p>
            <img src={Image} alt="Personal-Image" />
            <div className="aboutMeImageOverlay">
                <p>Text text text text. Text text text text.</p>
            </div>
        </div>
        </div>
    )
}