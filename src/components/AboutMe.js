import Image from '../images/200x300.png'

export default function AboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">
        <div className="aboutMeItem">
            <div className="aboutMeImageItem">
                <img src={Image} alt="Developer-Image" />
                <div className="aboutMeImageOverlay">
                    <p className="bumpedText">Text text text text. Text text text text.</p>
                </div>
            </div>
            <h3>Full Stack Developer</h3>
        </div>

        <div className="aboutMeItem">
            <h3>FirstName LastName</h3>
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