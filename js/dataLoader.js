let portfolioData = {};

async function loadPortfolioData() {
    try {
        const response = await fetch("data/portfolio.json");
        portfolioData = await response.json();

        // When data is ready, initialize the website
        initializeWebsite();

    } catch (error) {
        console.error("Error loading portfolio data:", error);
    }
}

window.addEventListener("DOMContentLoaded", loadPortfolioData);