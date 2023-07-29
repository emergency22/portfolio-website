import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Introduction from './components/Introduction'
import AboutMe from './components/AboutMe'
import PortfolioIntroduction from './components/PortfolioIntroduction';
import Footer from './components/Footer';

function LandingPage() {
    return (
        <>
        <Header />
        <Introduction />
        <AboutMe />
        <PortfolioIntroduction />
        <Footer />
        </>
    )
}

ReactDOM.render(<LandingPage />, document.getElementById('root'));