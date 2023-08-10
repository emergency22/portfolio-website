// import { Link } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const scrollToAboutMe = () => {
        const aboutMeSection = document.getElementById('aboutMe');
        if (aboutMeSection) {
            aboutMeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
    <section class="header">
        <nav>
            <div class="nav-links" id="navLinks">
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><a href="#aboutMe" onClick={scrollToAboutMe}>About Me</a></li>
                    <li><a href="https://docs.google.com/document/d/1I6TqZTnOhw0Nhjnft9ptlRIm3yZOQQpp/edit?usp=sharing&ouid=105921216387970791018&rtpof=true&sd=true" target="_blank">Resume</a></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><a href="https://github.com/emergency22" target="_blank">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/alexdmurillo/" target="_blank">LinkedIn</a></li>
                </ul>
            </div>
        </nav>
    </section>
    )
}