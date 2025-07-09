document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: 'Arbitrage Pairs Trading',
            description: 'A Python-based backtesting engine for pairs trading strategies on the S&P 500.',
            url: 'https://github.com/kotashida/arbitrage_pairs_trading',
            category: 'Quantitative Finance'
        },
        {
            name: 'Asian Options Monte Carlo',
            description: 'A Python script to price Asian options using Monte Carlo simulation.',
            url: 'https://github.com/kotashida/asian_options_monte_carlo',
            category: 'Quantitative Finance'
        },
        {
            name: 'MVO/HRP Comparison',
            description: 'A Python project comparing Mean-Variance Optimization and Hierarchical Risk Parity.',
            url: 'https://github.com/kotashida/mvo_hrp_comparison',
            category: 'Quantitative Finance'
        },
        {
            name: 'USD/JPY Predictor',
            description: 'A machine learning model to predict the USD/JPY exchange rate.',
            url: 'https://github.com/kotashida/usdjpy_predictor',
            category: 'Machine Learning'
        },
        {
            name: 'LA Transit Accessibility',
            description: 'A Python project to analyze and visualize transit accessibility in Los Angeles County.',
            url: 'https://github.com/kotashida/la-transit-accessibility',
            category: 'Geospatial Analysis'
        }
    ];

    const projectContainer = document.querySelector('#projects .container');

    // Group projects by category
    const categorizedProjects = projects.reduce((acc, project) => {
        (acc[project.category] = acc[project.category] || []).push(project);
        return acc;
    }, {});

    // Clear existing content before adding new categories
    projectContainer.innerHTML = '<h2>Projects</h2>';

    for (const category in categorizedProjects) {
        const categorySection = document.createElement('div');
        categorySection.classList.add('project-category-section');

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);

        const projectGrid = document.createElement('div');
        projectGrid.classList.add('project-grid');

        categorizedProjects[category].forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            const projectName = document.createElement('h4');
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
        categorySection.appendChild(projectGrid);
        projectContainer.appendChild(categorySection);
    }
});
