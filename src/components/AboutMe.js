// import React from 'react'
import Image from '../images/200x300.png'

export default function AboutMe() {
    return (
        <div className="aboutMe">
        <div className="aboutMeItem">
            <div className="aboutMeImageItem">
                <img src={Image} alt="Developer-Image" />
                <div className="aboutMeImageOverlay">
                    <p className="bumpedText">Text text text text. Text text text text.</p>
                </div>
            </div>
            <p>Full Stack Developer</p>
        </div>

        <div className="aboutMeItem">
            <p>FirstName LastName</p>
            <div className="aboutMeImageItem">
                <img src={Image} alt="Personal-Image" />
                <div className="aboutMeImageOverlay">
                    <p className="bumpedText">Text text text text. Text text text text.</p>
                </div>
            </div>
        </div>

        </div>
    )
}