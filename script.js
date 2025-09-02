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
            name: 'Energy Risk Forecasting with GARCH Models',
            description: 'A risk management tool to forecast Value at Risk (VaR) for energy commodities using GARCH models, presented in an interactive Dash dashboard.',
            url: 'https://github.com/kotashida/energy_risk_forecast',
            category: 'Quantitative Finance'
        },
        {
            name: 'USD/JPY Predictor',
            description: 'A machine learning model to predict the USD/JPY exchange rate.',
            url: 'https://github.com/kotashida/usdjpy_predictor',
            category: 'Machine Learning'
        },
        {
            name: 'Credit Risk Default Prediction',
            description: 'A machine learning model to predict loan defaults using the Lending Club dataset.',
            url: 'https://github.com/kotashida/loan_default_prediction',
            category: 'Machine Learning'
        },
        {
            name: 'Predictive Maintenance for Energy Equipment',
            description: 'A model to predict equipment failure using sensor data for predictive maintenance.',
            url: 'https://github.com/kotashida/predictive_maintenance_energy_equipment',
            category: 'Machine Learning'
        },
        {
            name: 'Fine-Tuning BERT for Financial Document Classification',
            description: 'Fine-tuning a BERT model to classify financial documents by sentiment, covering the entire workflow from data preprocessing to model training and evaluation.',
            url: 'https://github.com/kotashida/fine_tuning_financial_documents',
            category: 'Machine Learning'
        },
        {
            name: 'NBA Win Probability Tracker for OKC Thunder',
            description: 'A real-time win probability tracker for OKC Thunder games that fetches live play-by-play data and uses a logistic regression model to visualize win probability.',
            url: 'https://github.com/kotashida/thunder_win_probability',
            category: 'Machine Learning'
        },
        {
            name: 'LA Transit Accessibility',
            description: 'A Python project to analyze and visualize transit accessibility in Los Angeles County.',
            url: 'https://github.com/kotashida/la-transit-accessibility',
            category: 'Geospatial Analysis'
        },
        {
            name: 'Geospatial Analysis of U.S. Power Plants',
            description: 'Analyzes the distribution and capacity of power plants across the United States, generating an interactive map and a bar chart that visualize the density of power plants by state.',
            url: 'https://github.com/kotashida/geospatial_analysis_energy_infrastructure',
            category: 'Geospatial Analysis'
        },
        {
            name: 'Scalable Data Pipeline API',
            description: 'A scalable, asynchronous data ingestion pipeline using FastAPI and RabbitMQ.',
            url: 'https://github.com/kotashida/scalable_data_pipeline_api',
            category: 'Software Engineering'
        },
        {
            name: 'Data Quality Governance',
            description: 'A project that establishes a data quality governance framework by profiling, cleaning, and generating reports on data quality.',
            url: 'https://github.com/kotashida/data_quality_governance',
            category: 'Software Engineering'
        },
        {
            name: 'Stock Market Dashboard',
            description: 'A web-based dashboard for monitoring stock market data, including price trends, volume, and key financial metrics.',
            url: 'https://github.com/kotashida/stock_market_dashboard',
            category: 'Software Engineering'
        },
        {
            name: 'NYC 311 Interpreter Wait Times',
            description: 'An automated pipeline that ingests NYC 311 interpreter wait-time and service request datasets, validates and standardizes the data, and produces a weekly Excel KPI workbook and an auto-generated PowerPoint deck to highlight service equity and access gaps.',
            url: 'https://github.com/kotashida/nyc_311_interpreter_wait_times',
            category: 'Software Engineering'
        }
    ];

    const projectContainer = document.getElementById('project-grid-container');
    const tabs = document.querySelectorAll('.tab-button');

    function displayProjects(category) {
        projectContainer.innerHTML = '';
        const filteredProjects = projects.filter(p => p.category === category);

        filteredProjects.forEach(project => {
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

            projectContainer.appendChild(projectCard);
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            displayProjects(tab.dataset.category);
        });
    });

    // Initial display
    displayProjects('Machine Learning');

    // Smooth scrolling for navigation links
    document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
