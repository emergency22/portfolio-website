import Image1 from '../images/200x300.png'

export default function PortfolioPageSection() {
    return (
        <div>
            <div className="portfolioStyle">
                <div className="portfolioImageItem">
                    <img src={Image1} alt="Image 1 " /><br />
                    <a href="">Video Demo</a><br />
                    <a href="">GitHub Repo</a>
                </div>
                <div className="portfolioImageItem">
                    <img src={Image1} alt="Image 2 " /><br />
                    <a href="">Video Demo</a><br />
                    <a href="">GitHub Repo</a>
                </div>
                <div className="portfolioImageItem">
                    <img src={Image1} alt="Image 3 " /><br />
                    <a href="">Video Demo</a><br />
                    <a href="">GitHub Repo</a>
                </div>
            </div>

            <div className="portfolioStyle">
                <div className="portfolioImageItem">
                    <img src={Image1} alt="Image 4 " /><br />
                    <a href="">Video Demo</a><br />
                    <a href="">GitHub Repo</a>
                </div>
                <div className="portfolioImageItem">
                    <img src={Image1} alt="Image 5 " /><br />
                    <a href="">Video Demo</a><br />
                    <a href="">GitHub Repo</a>
                </div>
                <div className="portfolioImageItem">
                    <img src={Image1} alt="Image 6 " /><br />
                    <a href="">Video Demo</a><br />
                    <a href="">GitHub Repo</a>
                </div>
            </div>
        </div>
    )
}