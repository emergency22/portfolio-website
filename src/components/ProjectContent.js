import Picture from '../images/200x300.png'

export default function ProjectContent() {
    return(
        <div className="projectContent">
            <div className="projectOverview">
                <h3>Project Title</h3>
                <hr />
                <p>A portfolio project to demonstrate my skills as a developer.</p>
                <ul>
                    <li>Industry: Tech</li>
                    <li>Duration: 2 Weeks</li>
                    <li>Members: Alex & Gabe</li>
                </ul>
                <img src={Picture} alt="Main Project Picture" />
            </div>

            <div className="projectDetails">
                <div className="projectDetails-row">
                    <div className="projectServices">
                        <ul>
                            <li>Frontend Web Development</li>
                            <li>UX/UI Design</li>
                        </ul>
                    </div>
                    <div className="projectTechnologies">
                        <ul>
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>AWS</li>
                            <li>React</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className="projectTeamComposition">
                        <ul>
                            <li>Alex Murillo</li>
                            <li>Gabe Guio</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projectChallenges">
                <p>Talk about challenges here.</p>
            </div>

        </div>
    )
}