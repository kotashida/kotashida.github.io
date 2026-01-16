document.addEventListener('DOMContentLoaded', function() {
    // --- Main Navigation Tab Logic ---
    const navTabs = document.querySelectorAll('.nav-tab');
    const heroSection = document.querySelector('header');
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const skillsSection = document.getElementById('skills');
    const contactSection = document.getElementById('contact');

    // Grouping views for easy management
    const views = {
        'home': [heroSection],
        'about': [aboutSection],
        'projects': [projectsSection],
        'skills': [skillsSection],
        'contact': [contactSection]
    };

    function switchTab(targetId) {
        // 1. Hide all views
        Object.values(views).flat().forEach(el => {
            el.style.display = 'none';
            el.classList.remove('fade-in'); // Reset animation
        });

        // 2. Show target view
        const targetElements = views[targetId];
        targetElements.forEach(el => {
            // Check if the element should be flex (Header, About, Contact) or block (Projects, Skills)
            if (el.tagName === 'HEADER' || el.id === 'about' || el.id === 'contact') {
                el.style.display = 'flex';
            } else {
                el.style.display = 'block';
            }
            
            // Use setTimeout to allow display to apply before opacity transition
            setTimeout(() => el.classList.add('fade-in'), 10);
        });

        // 3. Update Nav Active State
        navTabs.forEach(tab => {
            if (tab.dataset.target === targetId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // 4. Reset Scroll
        window.scrollTo(0, 0);
    }

    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(tab.dataset.target);
        });
    });

    // Initialize View (Show Home, Hide others)
    // We manually hide others first to ensure clean start
    Object.values(views).flat().forEach(el => el.style.display = 'none');
    switchTab('home');

    // --- Existing Project Filtering Logic ---
    const projects = [
        {
            name: 'Bone Fracture Detection: Computer Vision & Quantitative Analysis',
            description: 'A sophisticated Computer Vision system utilizing YOLOv8 and statistical evaluation metrics (mAP, IoU) to automate the detection and localization of bone fractures in X-ray imagery.',
            url: 'https://github.com/kotashida/bone_fracture_detection',
            category: 'Machine Learning'
        },
        {
            name: 'Scalable Medical Imaging Analytics Pipeline',
            description: 'A high-performance, local-first ETL pipeline and analytical dashboard for medical imaging (DICOM) data, utilizing DuckDB for efficient metadata querying and Streamlit for volumetric visualization.',
            url: 'https://github.com/kotashida/medical_imaging_analysis',
            category: 'Data Engineering & Systems'
        },
        {
            name: 'Enterprise IT Portfolio Risk Dashboard',
            description: 'A quantitative risk analytics framework evaluating the U.S. Federal IT Portfolio using Earned Value Management (EVM) and stochastic simulation to identify capital at risk.',
            url: 'https://github.com/kotashida/federal_it_risk_dashboard',
            category: 'Quantitative Finance'
        },
        {
            name: 'MLB Stats Intelligence: Local RAG System',
            description: 'A privacy-first, local Retrieval-Augmented Generation (RAG) system for querying high-dimensional Major League Baseball statistics using Vector Search and Quantized LLMs.',
            url: 'https://github.com/kotashida/mlb_stats_rag',
            category: 'Natural Language Processing'
        },
        {
            name: 'Causal Impact Analysis: Public Transit & Employment',
            description: 'A quasi-experimental study using Difference-in-Differences (DiD) to estimate the causal impact of the 2016 Seattle Link Light Rail extension on local employment density.',
            url: 'https://github.com/kotashida/public_transit_employment_rate',
            category: 'Geospatial Analysis'
        },
        {
            name: 'Generative AI Agent for Quantitative Web3 Analysis',
            description: 'An autonomous AI agent performing real-time quantitative analysis and security auditing for Real-World Assets (RWAs) and Web3 tokens using LLMs and market data.',
            url: 'https://github.com/kotashida/quantitative_analysis_ai_agent',
            category: 'Quantitative Finance'
        },
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
            name: 'Los Angeles Public Transit Accessibility Analysis',
            description: 'A geospatial analysis tool utilizing GTFS data and OpenStreetMap to visualize public transit service intensity and spatial accessibility gaps across Los Angeles County.',
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
            name: 'Stock Market Analysis Dashboard',
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