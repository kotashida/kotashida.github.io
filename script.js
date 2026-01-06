document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: 'Mining Misconceptions: NLP-Based Detection',
            description: 'A natural language processing pipeline that mines mathematics forums to identify, cluster, and quantify student misconceptions using BERTopic and semantic depth classification.',
            url: 'https://github.com/kotashida/nlp_cognitive_obstacles',
            category: 'Natural Language Processing'
        },
        {
            name: 'Wikipedia Sentiment Analysis',
            description: 'A multi-language sentiment analysis of Wikipedia articles on U.S. presidents, correlating linguistic sentiment with global public opinion polls.',
            url: 'https://github.com/kotashida/wikipedia_sentiment_analysis',
            category: 'Natural Language Processing'
        },
        {
            name: 'Fine-Tuning BERT for Financial Document Classification',
            description: 'A fine-tuned BERT model for classifying the sentiment of financial documents, demonstrating an end-to-end NLP workflow.',
            url: 'https://github.com/kotashida/fine_tuning_financial_documents',
            category: 'Natural Language Processing'
        },
        {
            name: 'Secure IoT Telemetry Pipeline',
            description: 'A containerized, end-to-end data engineering pipeline for ingesting, validating, and analyzing high-volume drone telemetry with robust security and real-time monitoring.',
            url: 'https://github.com/kotashida/secure_iot_telemetry_pipeline',
            category: 'Data Engineering & Systems'
        },
        {
            name: 'Arbitrage Pairs Trading',
            description: 'An algorithmic backtesting engine that identifies and executes mean-reversion strategies on correlated S&P 500 stock pairs.',
            url: 'https://github.com/kotashida/arbitrage_pairs_trading',
            category: 'Quantitative Finance'
        },
        {
            name: 'Asian Options Monte Carlo',
            description: 'A Monte Carlo simulation tool for pricing Asian options, utilizing control variates to enhance computational efficiency and accuracy.',
            url: 'https://github.com/kotashida/asian_options_monte_carlo',
            category: 'Quantitative Finance'
        },
        {
            name: 'MVO/HRP Comparison',
            description: 'A comparative study analyzing risk-adjusted returns between traditional Mean-Variance Optimization and Hierarchical Risk Parity portfolio construction techniques.',
            url: 'https://github.com/kotashida/mvo_hrp_comparison',
            category: 'Quantitative Finance'
        },
        {
            name: 'Energy Risk Forecasting with GARCH Models',
            description: 'An interactive risk management dashboard forecasting Value at Risk (VaR) for energy commodities using volatility-clustering GARCH models.',
            url: 'https://github.com/kotashida/energy_risk_forecast',
            category: 'Quantitative Finance'
        },
        {
            name: 'USD/JPY Predictor',
            description: 'A machine learning forecasting model predicting USD/JPY exchange rates using historical price data and technical indicators.',
            url: 'https://github.com/kotashida/usdjpy_predictor',
            category: 'Machine Learning'
        },
        {
            name: 'Credit Risk Default Prediction',
            description: 'A classification model predicting loan default probabilities using the Lending Club dataset to optimize credit risk assessment.',
            url: 'https://github.com/kotashida/loan_default_prediction',
            category: 'Machine Learning'
        },
        {
            name: 'Predictive Maintenance for Energy Equipment',
            description: 'A failure prediction system leveraging sensor data to forecast equipment breakdowns and optimize maintenance schedules in the energy sector.',
            url: 'https://github.com/kotashida/predictive_maintenance_energy_equipment',
            category: 'Machine Learning'
        },
        {
            name: 'NBA Win Probability Tracker for OKC Thunder',
            description: 'A real-time logistic regression model visualizing win probabilities for OKC Thunder games using live play-by-play data.',
            url: 'https://github.com/kotashida/thunder_win_probability',
            category: 'Machine Learning'
        },
        {
            name: 'LA Transit Accessibility',
            description: 'A geospatial analysis tool visualizing public transit accessibility gaps across Los Angeles County using GTFS and census data.',
            url: 'https://github.com/kotashida/la-transit-accessibility',
            category: 'Geospatial Analysis'
        },
        {
            name: 'Geospatial Analysis of U.S. Power Plants',
            description: 'An interactive visualization mapping the distribution and generation capacity of power infrastructure across the United States.',
            url: 'https://github.com/kotashida/geospatial_analysis_energy_infrastructure',
            category: 'Geospatial Analysis'
        },
        {
            name: 'Scalable Data Pipeline API',
            description: 'An asynchronous, high-throughput data ingestion API built with FastAPI and RabbitMQ for reliable message processing.',
            url: 'https://github.com/kotashida/scalable_data_pipeline_api',
            category: 'Data Engineering & Systems'
        },
        {
            name: 'Data Quality Governance',
            description: 'A comprehensive framework for automated data profiling, cleaning, and quality reporting to ensure data integrity.',
            url: 'https://github.com/kotashida/data_quality_governance',
            category: 'Data Engineering & Systems'
        },
        {
            name: 'Stock Market Dashboard',
            description: 'A real-time financial dashboard tracking stock prices, trading volumes, and key market metrics with interactive visualizations.',
            url: 'https://github.com/kotashida/stock_market_dashboard',
            category: 'Data Engineering & Systems'
        },
        {
            name: 'NYC 311 Interpreter Wait Times',
            description: 'An automated ETL pipeline that standardizes NYC 311 data to generate weekly KPI reports highlighting service equity gaps.',
            url: 'https://github.com/kotashida/nyc_311_interpreter_wait_times',
            category: 'Data Engineering & Systems'
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
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
});