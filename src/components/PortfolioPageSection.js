import Image1 from '../images/200x300.png'
import { projectMap } from '../data/database'

export default function PortfolioPageSection() {
    return (
        <div className="portfolioPageSection">
            <div className="portfolioStyle">
                <div className="portfolioImageItem">
                    <img src={Image1} alt="Image 1 " /><br />
                    <div className="techStackOverlay">
                        <ul>
                            <li>{projectMap.get("Awesome Project").technologies[0]}</li>
                            <li>{projectMap.get("Awesome Project").technologies[1]}</li>
                            <li>{projectMap.get("Awesome Project").technologies[2]}</li>
                        </ul>
                    </div>
                    <a href="">Video Demo</a><br />
                    <a href="">GitHub Repo</a>
                </div>
                <div className="portfolioImageItem">
                    <img src={Image1} alt="Image 2 " /><br />
                    <div className="techStackOverlay">
                        <ul>
                            <li>Technology 1</li>
                            <li>Technology 2</li>
                            <li>Technology 3</li>
                            <li>Technology 4</li>
                            <li>Technology 5</li>
                        </ul>
                    </div>
                    <a href="">Video Demo</a><br />
                    <a href="">GitHub Repo</a>
                </div>
                <div className="portfolioImageItem">
                    <img src={Image1} alt="Image 3 " /><br />
                    <div className="techStackOverlay">
                        <ul>
                            <li>Technology 1</li>
                            <li>Technology 2</li>
                            <li>Technology 3</li>
                            <li>Technology 4</li>
                            <li>Technology 5</li>
                        </ul>
                    </div>
                    <a href="">Video Demo</a><br />
                    <a href="">GitHub Repo</a>
                </div>
            </div>

            <div className="portfolioStyle">
                <div className="portfolioImageItem">
                    <img src={Image1} alt="Image 4 " /><br />
                    <div className="techStackOverlay">
                        <ul>
                            <li>Technology 1</li>
                            <li>Technology 2</li>
                            <li>Technology 3</li>
                            <li>Technology 4</li>
                            <li>Technology 5</li>
                        </ul>
                    </div>
                    <a href="">Video Demo</a><br />
                    <a href="">GitHub Repo</a>
                </div>
                <div className="portfolioImageItem">
                    <img src={Image1} alt="Image 5 " /><br />
                    <div className="techStackOverlay">
                        <ul>
                            <li>Technology 1</li>
                            <li>Technology 2</li>
                            <li>Technology 3</li>
                            <li>Technology 4</li>
                            <li>Technology 5</li>
                        </ul>
                    </div>
                    <a href="">Video Demo</a><br />
                    <a href="">GitHub Repo</a>
                </div>
                <div className="portfolioImageItem">
                    <img src={Image1} alt="Image 6 " /><br />
                    <div className="techStackOverlay">
                        <ul>
                            <li>Technology 1</li>
                            <li>Technology 2</li>
                            <li>Technology 3</li>
                            <li>Technology 4</li>
                            <li>Technology 5</li>
                        </ul>
                    </div>
                    <a href="">Video Demo</a><br />
                    <a href="">GitHub Repo</a>
                </div>
            </div>
        </div>
    )
}