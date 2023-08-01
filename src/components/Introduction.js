// import React from 'react'
import AWS from '../images/icons/aws.svg'
import JavaIcon from '../images/icons/java.svg'
import JavascriptIcon from '../images/icons/javascript.svg'
import HTMLicon from '../images/icons/html-5.svg'
import CSSicon from '../images/icons/css-3.svg'
import NodeIcon from '../images/icons/nodejs.svg'
import ReactIcon from '../images/icons/reactPNG.png'


export default function Introduction() {
    return (
        <div className="introduction">
            <h1>FirstName LastName</h1>
            <p>Full Stack Developer</p>
            <p>Insert quick introductory paragraph. Insert quick introductory paragraph. Insert quick introductory paragraph. Insert quick introductory paragraph. </p>
            <ul className="introductionTechStackItems">
                <li><img src={AWS} alt="AWS" width="60" /></li>
                <li><img src={JavaIcon} alt="Java" width="60" /></li>
                <li><img src={JavascriptIcon} alt="Javascript" width="60" /></li>
                <li><img src={HTMLicon} alt="HTML" width="60" /></li>
                <li><img src={CSSicon} alt="CSS" width="60" /></li>
                <li><img src={NodeIcon} alt="Node" width="60" /></li>
                <li><img src={ReactIcon} alt="React" width="60" /></li>
            </ul>
        </div>
    )
}