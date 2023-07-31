// import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import PortfolioPageSection from '../components/PortfolioPageSection'

export default function MyPortfolio() {
    return (
        <>
        <Header />
        <PortfolioPageSection />
        <Footer />
        </>
    )
}

// ReactDOM.render(<MyPortfolio />, document.getElementById('portfolioRoot'));

// const root = document.getElementById('portfolioRoot');
// const app = <MyPortfolio />;
// createRoot(root).render(app);