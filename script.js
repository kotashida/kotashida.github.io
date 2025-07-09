document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: 'Arbitrage Pairs Trading',
            description: 'A Python-based backtesting engine for pairs trading strategies on the S&P 500.',
            url: 'https://github.com/kotashida/arbitrage_pairs_trading'
        },
        {
            name: 'Asian Options Monte Carlo',
            description: 'A Python script to price Asian options using Monte Carlo simulation.',
            url: 'https://github.com/kotashida/asian_options_monte_carlo'
        },
        {
            name: 'LA Transit Accessibility',
            description: 'A Python project to analyze and visualize transit accessibility in Los Angeles County.',
            url: 'https://github.com/kotashida/la-transit-accessibility'
        },
        {
            name: 'MVO/HRP Comparison',
            description: 'A Python project comparing Mean-Variance Optimization and Hierarchical Risk Parity.',
            url: 'https://github.com/kotashida/mvo_hrp_comparison'
        },
        {
            name: 'USD/JPY Predictor',
            description: 'A machine learning model to predict the USD/JPY exchange rate.',
            url: 'https://github.com/kotashida/usdjpy_predictor'
        }
    ];

    const projectGrid = document.querySelector('#projects .project-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const projectName = document.createElement('h3');
        projectName.textContent = project.name;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const projectLink = document.createElement('a');
        projectLink.href = project.url;
        projectLink.textContent = 'View on GitHub';
        projectLink.target = '_blank';

        projectCard.appendChild(projectName);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(projectLink);

        projectGrid.appendChild(projectCard);
    });
});
