// import React from 'react'
import Image from '../images/200x300.png'

export default function AboutMe() {
    return (
        <div className="aboutMe">
        <div>
            <img src={Image} alt="Developer-Image" />
            <p>Full Stack Developer</p>
        </div>

        <div>
            <p>FirstName LastName</p>
            <img src={Image} alt="Personal-Image" />
        </div>
        </div>
    )
}