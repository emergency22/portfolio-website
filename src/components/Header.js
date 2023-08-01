// import React from 'react'

export default function Header() {
    return (
        <nav className="header">
        <ul className="headerNavMenu">
            <li><a href="./home">Home</a></li>
            <li>About Me</li>
            <li><a href="">Resume</a></li>
            <li><a href="./portfolio">Portfolio</a></li>
        </ul>

        <ul className="headerPersonalLinks">
            <li><a href="">GitHub</a></li>
            <li><a href="">LinkedIn</a></li>
        </ul>
        </nav>
    )
}