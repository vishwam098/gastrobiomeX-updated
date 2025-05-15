// Progress Bar Implementation
window.addEventListener('scroll', () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
});

// Time Machine Data
const eraData = {
    ancient: {
        title: "Ancient Knowledge",
        year: "Pre-1900",
        image: "/api/placeholder/450/300", // Replace with actual image path
        discoveries: [
            "Early observations of digestion in ancient civilizations",
            "Traditional medicinal practices related to gut health",
            "Hippocrates' belief that 'all disease begins in the gut'"
        ],
        description: "Long before modern science, ancient civilizations recognized the importance of gut health. From Chinese medicine to Ayurvedic practices, traditional healers emphasized dietary approaches to maintaining digestive health. Hippocrates, the father of modern medicine, famously stated 'all disease begins in the gut,' highlighting early recognition of the gut's importance to overall health.",
        figures: [
            {
                name: "Hippocrates",
                description: "Ancient Greek physician who emphasized the gut's role in health",
                image: "/api/placeholder/100/100"
            },
            {
                name: "Galen",
                description: "Roman physician who studied digestive processes",
                image: "/api/placeholder/100/100"
            }
        ]
    },
    early: {
        title: "Early 20th Century",
        year: "1900-1925",
        image: "/api/placeholder/450/300", // Replace with actual image path
        discoveries: [
            "Early observations of intestinal microorganisms",
            "First studies linking bacteria to digestion",
            "Development of early microscopy techniques for bacteria visualization"
        ],
        description: "The early 20th century marked the beginning of scientific inquiry into gut microorganisms. Researchers began to observe and document various bacteria in the human intestinal tract, though their specific functions remained largely unknown. Pioneering scientists laid the groundwork for understanding the complex relationship between gut microbes and human health.",
        figures: [
            {
                name: "Élie Metchnikoff",
                description: "Proposed that lactic acid bacteria might have health benefits",
                image: "/api/placeholder/100/100"
            },
            {
                name: "Alfred Nissle",
                description: "Isolated probiotic E. coli strain during WWI",
                image: "/api/placeholder/100/100"
            }
        ]
    },
    mid: {
        title: "Mid-Century Advances",
        year: "1926-1980",
        image: "/api/placeholder/450/300", // Replace with actual image path
        discoveries: [
            "Discovery of antibiotics and their effect on gut flora",
            "First recognition of 'beneficial bacteria' concept",
            "Early associations between gut flora imbalance and disease"
        ],
        description: "The mid-20th century saw major advances in microbiology, including the discovery and widespread use of antibiotics. Scientists began to recognize the collateral damage antibiotics could cause to beneficial gut bacteria. This era also marked the beginning of research into 'beneficial bacteria' and their potential therapeutic applications, laying the foundation for modern probiotic science.",
        figures: [
            {
                name: "Werner Kollath",
                description: "Introduced the concept of prebiotics in 1953",
                image: "/api/placeholder/100/100"
            },
            {
                name: "Theodor Escherich",
                description: "Studied intestinal bacteria in infants and children",
                image: "/api/placeholder/100/100"
            }
        ]
    },
    modern: {
        title: "Modern Microbiome Era",
        year: "1980-2015",
        image: "/api/placeholder/450/300", // Replace with actual image path
        discoveries: [
            "Human Microbiome Project launched in 2008",
            "Discovery of microbiome's influence on metabolism and immunity",
            "Development of DNA sequencing techniques for microbiome analysis",
            "Recognition of gut-brain axis connections"
        ],
        description: "The modern era represents an explosion in microbiome research, facilitated by advanced DNA sequencing technologies. The Human Microbiome Project and similar initiatives mapped the complex ecosystem of microorganisms living in and on the human body. Researchers discovered connections between gut microbiota and numerous health conditions, including obesity, inflammatory bowel diseases, diabetes, and even neurological disorders.",
        figures: [
            {
                name: "Joshua Lederberg",
                description: "Coined the term 'microbiome' in 2001",
                image: "/api/placeholder/100/100"
            },
            {
                name: "Barry Marshall",
                description: "Discovered H. pylori's role in gastric ulcers",
                image: "/api/placeholder/100/100"
            },
            {
                name: "Rob Knight",
                description: "Pioneer in computational analysis of microbiome data",
                image: "/api/placeholder/100/100"
            }
        ]
    },
    future: {
        title: "Future Frontiers",
        year: "2015-Present",
        image: "/api/placeholder/450/300", // Replace with actual image path
        discoveries: [
            "Personalized microbiome analysis and therapies",
            "Engineered bacteria as therapeutic agents",
            "AI applications in microbiome research",
            "Expanded understanding of the gut-brain connection"
        ],
        description: "Current and future research focuses on personalized approaches to gut health, recognizing the unique nature of each individual's microbiome. Precision probiotics, engineered therapeutic bacteria, and AI-driven analysis of microbiome data represent cutting-edge approaches. The expanding recognition of the gut-brain axis has opened new frontiers in treating neurological and psychological conditions through microbiome interventions.",
        figures: [
            {
                name: "Jeffrey Gordon",
                description: "Pioneer in microbiome's role in obesity and malnutrition",
                image: "/api/placeholder/100/100"
            },
            {
                name: "Martin Blaser",
                description: "Researcher on antibiotics' impact on microbiome diversity",
                image: "/api/placeholder/100/100"
            },
            {
                name: "Sarkis Mazmanian",
                description: "Studying gut microbiome's influence on brain development",
                image: "/api/placeholder/100/100"
            }
        ]
    }
};

// Quiz Data
const quizData = [
    {
        question: "Who proposed the concept that consuming beneficial bacteria could promote health in the early 1900s?",
        options: ["Louis Pasteur", "Élie Metchnikoff", "Alexander Fleming", "Joseph Lister"],
        correctIndex: 1,
        feedback: "Élie Metchnikoff proposed in 1908 that consuming lactic acid bacteria in yogurt could promote health and longevity."
    },
    {
        question: "When was the Human Microbiome Project launched?",
        options: ["1995", "2001", "2008", "2015"],
        correctIndex: 2,
        feedback: "The Human Microbiome Project was launched by the NIH in 2008 to characterize the human microbiome and its role in health."
    },
    {
        question: "Which ancient Greek physician famously stated that 'all disease begins in the gut'?",
        options: ["Aristotle", "Hippocrates", "Galen", "Pythagoras"],
        correctIndex: 1,
        feedback: "Hippocrates, often called the father of modern medicine, is credited with the statement that 'all disease begins in the gut'."
    },
    {
        question: "What term describes non-digestible food ingredients that beneficially affect the host by selectively stimulating the growth of beneficial bacteria?",
        options: ["Probiotics", "Antibiotics", "Prebiotics", "Symbiotics"],
        correctIndex: 2,
        feedback: "Prebiotics are non-digestible food ingredients that selectively promote the growth of beneficial bacteria in the gut."
    },
    {
        question: "Which discovery in 1982 by Marshall and Warren changed our understanding of stomach ulcers?",
        options: ["E. coli bacteria", "H. pylori bacteria", "Lactobacillus", "Bifidobacteria"],
        correctIndex: 1,
        feedback: "Barry Marshall and Robin Warren discovered that H. pylori bacteria, not stress or spicy food, were the primary cause of stomach ulcers."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Ensure all interactive elements are initialized only when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Make sure all DOM elements exist before initializing
    try {
        initializeTimeMachine();
        initializeKnowledgeChart();
        initializeMilestoneGallery();
        initializeQuiz();
        console.log("All modules initialized successfully");
    } catch (error) {
        console.error("Error initializing modules:", error);
    }
});

// Time Machine Functions
function initializeTimeMachine() {
    const yearSlider = document.getElementById('year-slider');
    const selectedYear = document.getElementById('selected-year');
    const eraButtons = document.querySelectorAll('.era-button');
    
    if (!yearSlider || !selectedYear) {
        console.error("Time Machine elements not found");
        return;
    }
    
    // Initialize the time display with default era
    updateEraDisplay('early');
    
    // Update year display when slider changes
    yearSlider.addEventListener('input', () => {
        const year = yearSlider.value;
        selectedYear.textContent = year;
        
        // Determine which era to display based on year
        let currentEra;
        if (year < 1900) currentEra = 'ancient';
        else if (year >= 1900 && year < 1926) currentEra = 'early';
        else if (year >= 1926 && year < 1980) currentEra = 'mid';
        else if (year >= 1980 && year < 2015) currentEra = 'modern';
        else currentEra = 'future';
        
        updateEraDisplay(currentEra);
        updateActiveEraButton(currentEra);
    });
    
    // Handle era button clicks - FIX: Ensure button event listeners are properly attached
    eraButtons.forEach(button => {
        button.addEventListener('click', () => {
            const era = button.getAttribute('data-era');
            if (!era) {
                console.error("Button missing data-era attribute");
                return;
            }
            
            console.log(`Era button clicked: ${era}`);
            updateEraDisplay(era);
            updateActiveEraButton(era);
            
            // Update slider and year display to match the selected era
            let sliderValue, yearText;
            switch(era) {
                case 'ancient':
                    sliderValue = 1899;
                    yearText = 'Pre-1900';
                    break;
                case 'early':
                    sliderValue = 1910;
                    yearText = '1910';
                    break;
                case 'mid':
                    sliderValue = 1950;
                    yearText = '1950';
                    break;
                case 'modern':
                    sliderValue = 2000;
                    yearText = '2000';
                    break;
                case 'future':
                    sliderValue = 2020;
                    yearText = '2020';
                    break;
                default:
                    sliderValue = 1900;
                    yearText = '1900';
            }
            yearSlider.value = sliderValue;
            selectedYear.textContent = yearText;
        });
    });
}

function updateEraDisplay(era) {
    // Get the era data
    const data = eraData[era];
    if (!data) {
        console.error(`No data found for era: ${era}`);
        return;
    }
    
    try {
        // Update display elements
        const titleEl = document.getElementById('era-title');
        const yearEl = document.getElementById('era-year');
        const imageEl = document.getElementById('era-image');
        const descEl = document.getElementById('era-description');
        
        if (titleEl) titleEl.textContent = data.title;
        if (yearEl) yearEl.textContent = data.year;
        if (imageEl) imageEl.src = data.image;
        if (descEl) descEl.textContent = data.description;
        
        // Update key discoveries list
        const discoveriesList = document.getElementById('key-discoveries-list');
        if (discoveriesList) {
            discoveriesList.innerHTML = '';
            data.discoveries.forEach(discovery => {
                const li = document.createElement('li');
                li.textContent = discovery;
                discoveriesList.appendChild(li);
            });
        }
        
        // Update notable figures - FIX: Ensure figures are correctly populated
        const figuresGrid = document.getElementById('notable-figures-grid');
        if (figuresGrid) {
            figuresGrid.innerHTML = '';
            data.figures.forEach(figure => {
                const figureCard = document.createElement('div');
                figureCard.className = 'figure-card';
                figureCard.innerHTML = `
                    <div class="figure-image">
                        <img src="${figure.image}" alt="${figure.name}">
                    </div>
                    <div class="figure-info">
                        <h5>${figure.name}</h5>
                        <p>${figure.description}</p>
                    </div>
                `;
                figuresGrid.appendChild(figureCard);
            });
        }
        
        // Add fade-in animation
        const displayElement = document.querySelector('.time-machine-display');
        if (displayElement) {
            displayElement.style.opacity = '0';
            setTimeout(() => {
                displayElement.style.opacity = '1';
            }, 50);
        }
    } catch (error) {
        console.error("Error updating era display:", error);
    }
}

function updateActiveEraButton(currentEra) {
    try {
        // Remove active class from all buttons
        document.querySelectorAll('.era-button').forEach(button => {
            button.classList.remove('active');
        });
        
        // Add active class to current era button
        const activeButton = document.querySelector(`.era-button[data-era="${currentEra}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        } else {
            console.warn(`No button found for era: ${currentEra}`);
        }
    } catch (error) {
        console.error("Error updating active era button:", error);
    }
}

// Knowledge Evolution Chart
function initializeKnowledgeChart() {
    try {
        const canvas = document.getElementById('knowledgeEvolutionChart');
        if (!canvas) {
            console.error("Knowledge chart canvas not found");
            return;
        }
        
        const ctx = canvas.getContext('2d');
        
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1900', '1925', '1950', '1975', '2000', '2025'],
                datasets: [
                    {
                        label: 'Microbiome Research',
                        data: [5, 10, 20, 30, 80, 100],
                        borderColor: '#4a90e2',
                        backgroundColor: 'rgba(74, 144, 226, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Clinical Applications',
                        data: [0, 5, 15, 25, 60, 90],
                        borderColor: '#e67e22',
                        backgroundColor: 'rgba(230, 126, 34, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Technology Development',
                        data: [2, 8, 18, 35, 75, 95],
                        borderColor: '#2ecc71',
                        backgroundColor: 'rgba(46, 204, 113, 0.1)',
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Research Intensity (relative units)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return 'Year: ' + context[0].label;
                            }
                        }
                    },
                    legend: {
                        position: 'top'
                    }
                }
            }
        });
    } catch (error) {
        console.error("Error initializing knowledge chart:", error);
    }
}

// Milestone Gallery Functions - FIX: Improve functionality for better scrolling and button handling
function initializeMilestoneGallery() {
    try {
        const slider = document.getElementById('milestone-slider');
        const prevBtn = document.getElementById('prev-milestone');
        const nextBtn = document.getElementById('next-milestone');
        
        if (!slider || !prevBtn || !nextBtn) {
            console.error("Milestone gallery elements not found");
            return;
        }
        
        // Calculate card width dynamically - FIX: Adjust scrolling to match actual content
        const cards = slider.querySelectorAll('.milestone-card');
        if (cards.length === 0) {
            console.warn("No milestone cards found");
            return;
        }
        
        const cardWidth = cards[0].offsetWidth;
        const cardMargin = parseInt(window.getComputedStyle(cards[0]).marginRight) || 30;
        const scrollAmount = cardWidth + cardMargin;
        
        console.log(`Milestone card width: ${cardWidth}px, margin: ${cardMargin}px, total scroll: ${scrollAmount}px`);
        
        // Handle prev button click
        prevBtn.addEventListener('click', () => {
            console.log("Previous milestone button clicked");
            slider.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Handle next button click
        nextBtn.addEventListener('click', () => {
            console.log("Next milestone button clicked");
            slider.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Add visible/hidden states for navigation buttons based on scroll position
        slider.addEventListener('scroll', () => {
            const isAtStart = slider.scrollLeft <= 10;
            const isAtEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 10;
            
            prevBtn.classList.toggle('disabled', isAtStart);
            nextBtn.classList.toggle('disabled', isAtEnd);
        });
        
        // Initialize button states
        prevBtn.classList.add('disabled');
    } catch (error) {
        console.error("Error initializing milestone gallery:", error);
    }
}

// Quiz Functions - FIX: Complete overhaul of quiz functionality for proper operation
function initializeQuiz() {
    try {
        const startQuizBtn = document.getElementById('start-quiz');
        const nextQuestionBtn = document.getElementById('next-question');
        const restartQuizBtn = document.getElementById('restart-quiz');
        const quizIntro = document.getElementById('quiz-intro');
        const quizQuestions = document.getElementById('quiz-questions');
        const quizResults = document.getElementById('quiz-results');
        const questionText = document.getElementById('question-text');
        const answerOptions = document.getElementById('answer-options');
        const currentQuestionSpan = document.getElementById('current-question');
        const totalQuestionsSpan = document.getElementById('total-questions');
        const userScoreSpan = document.getElementById('user-score');
        const maxScoreSpan = document.getElementById('max-score');
        const resultsMessage = document.getElementById('results-message');
        const quizFeedback = document.getElementById('quiz-feedback');
        
        // Check if quiz elements exist
        if (!startQuizBtn || !quizIntro || !quizQuestions || !questionText || !answerOptions) {
            console.error("Quiz elements not found");
            return;
        }
        
        let currentQuestion = 0;
        let score = 0;
        let selectedAnswer = null;
        
        // Initialize quiz
        totalQuestionsSpan.textContent = quizData.length;
        maxScoreSpan.textContent = quizData.length;
        
        // Start quiz - FIX: Properly initialize first question
        startQuizBtn.addEventListener('click', () => {
            console.log("Starting quiz");
            quizIntro.style.display = 'none';
            quizQuestions.style.display = 'block';
            currentQuestion = 0;
            score = 0;
            loadQuestion(0);
        });
        
        // Handle answer selection - FIX: Improve event delegation and answer handling
        answerOptions.addEventListener('click', (e) => {
            const clickedOption = e.target.closest('.answer-option');
            
            if (!clickedOption || selectedAnswer) return; // Already selected or didn't click an option
            
            // Store selected answer
            selectedAnswer = clickedOption;
            
            // Get correct answer index and all options
            const correctIndex = quizData[currentQuestion].correctIndex;
            const options = Array.from(answerOptions.children);
            
            // Mark selected answer
            options.forEach(option => option.classList.remove('selected'));
            selectedAnswer.classList.add('selected');
            
            // Check if answer is correct
            const isCorrect = options.indexOf(selectedAnswer) === correctIndex;
            
            // Apply appropriate styling
            if (isCorrect) {
                selectedAnswer.classList.add('correct');
                quizFeedback.textContent = quizData[currentQuestion].feedback;
                quizFeedback.className = 'quiz-feedback correct';
                quizFeedback.style.display = 'block';
                score++;
            } else {
                selectedAnswer.classList.add('incorrect');
                options[correctIndex].classList.add('correct');
                quizFeedback.textContent = quizData[currentQuestion].feedback;
                quizFeedback.className = 'quiz-feedback incorrect';
                quizFeedback.style.display = 'block';
            }
            
            // Enable next button
            nextQuestionBtn.disabled = false;
        });
        
        // Next question - FIX: Proper question advancement handling
        nextQuestionBtn.addEventListener('click', () => {
            currentQuestion++;
            
            if (currentQuestion < quizData.length) {
                loadQuestion(currentQuestion);
            } else {
                showResults();
            }
        });
        
        // Restart quiz - FIX: Properly reset quiz state
        restartQuizBtn.addEventListener('click', () => {
            console.log("Restarting quiz");
            currentQuestion = 0;
            score = 0;
            quizResults.style.display = 'none';
            quizQuestions.style.display = 'block';
            loadQuestion(0);
        });
        
        // Load question - FIX: Properly reset question state
        function loadQuestion(index) {
            console.log(`Loading question ${index + 1}`);
            
            // Reset state
            selectedAnswer = null;
            nextQuestionBtn.disabled = true;
            quizFeedback.style.display = 'none';
            
            // Update question counter
            currentQuestionSpan.textContent = index + 1;
            
            // Get question data
            const currentQuizData = quizData[index];
            
            // Load question
            questionText.textContent = currentQuizData.question;
            
            // Load answer options - FIX: Clear previous options correctly
            answerOptions.innerHTML = '';
            currentQuizData.options.forEach((option, i) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'answer-option';
                optionDiv.dataset.index = i;
                optionDiv.textContent = option;
                answerOptions.appendChild(optionDiv);
            });
            
            // Add fade-in effect for new question
            quizQuestions.style.opacity = '0';
            setTimeout(() => {
                quizQuestions.style.opacity = '1';
            }, 50);
        }
        
        // Show results - FIX: Properly display final score and message
        function showResults() {
            console.log(`Quiz completed. Score: ${score}/${quizData.length}`);
            
            quizQuestions.style.display = 'none';
            quizResults.style.display = 'block';
            userScoreSpan.textContent = score;
            
            // Set appropriate message based on score
            if (score === quizData.length) {
                resultsMessage.textContent = "Perfect score! You're a gut health history expert!";
            } else if (score >= quizData.length * 0.7) {
                resultsMessage.textContent = "Great job! You have a solid understanding of gut health history.";
            } else if (score >= quizData.length * 0.5) {
                resultsMessage.textContent = "Good effort! You're on your way to becoming a gut health historian.";
            } else {
                resultsMessage.textContent = "Thanks for taking the quiz! Review the time machine to learn more about gut health history.";
            }
            
            // Add animation for results display
            quizResults.style.opacity = '0';
            setTimeout(() => {
                quizResults.style.opacity = '1';
            }, 50);
        }
    } catch (error) {
        console.error("Error initializing quiz:", error);
    }
}

// Add additional CSS styles to fix any styling issues
document.addEventListener('DOMContentLoaded', () => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Fix milestone gallery scrolling */
        .milestone-slider {
            display: flex;
            overflow-x: auto;
            scroll-behavior: smooth;
            scrollbar-width: thin;
            gap: 30px;
            padding: 20px 10px;
            -webkit-overflow-scrolling: touch;
        }
        
        .milestone-card {
            flex: 0 0 300px;
            margin-right: 0; /* Using gap instead */
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .milestone-card:hover {
            transform: translateY(-5px);
        }
        
        /* Fix navigation buttons for milestone gallery */
        .milestone-nav-btn {
            cursor: pointer;
            background-color: #4a90e2;
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease, opacity 0.3s ease;
        }
        
        .milestone-nav-btn:hover {
            background-color: #357abd;
        }
        
        .milestone-nav-btn.disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        /* Fix quiz styling */
        .answer-option {
            cursor: pointer;
            padding: 15px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            margin-bottom: 10px;
            transition: all 0.3s ease;
        }
        
        .answer-option:hover {
            background-color: #f5f5f5;
            border-color: #d0d0d0;
        }
        
        .answer-option.selected {
            border-color: #4a90e2;
        }
        
        .answer-option.correct {
            background-color: #d4edda;
            border-color: #28a745;
        }
        
        .answer-option.incorrect {
            background-color: #f8d7da;
            border-color: #dc3545;
        }
        
        .quiz-feedback {
            margin-top: 15px;
            padding: 10px 15px;
            border-radius: 8px;
            font-weight: 500;
        }
        
        .quiz-feedback.correct {
            background-color: #d4edda;
            color: #155724;
        }
        
        .quiz-feedback.incorrect {
            background-color: #f8d7da;
            color: #721c24;
        }
        
        /* Add transitions for smoother experience */
        .time-machine-display,
        .quiz-questions,
        .quiz-results {
            transition: opacity 0.3s ease;
        }
        
        /* Fix responsive era buttons */
        .era-button {
            position: relative;
            overflow: hidden;
        }
        
        .era-button::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #4a90e2;
            transition: width 0.3s ease;
        }
        
        .era-button:hover::after {
            width: 100%;
        }
        
        .era-button.active {
            color: #4a90e2;
            font-weight: bold;
        }
        
        .era-button.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(styleElement);
});

// Quiz Functions

// Quiz Functions
function initializeQuiz() {
    // Get all quiz elements
    const elements = {
        startButton: document.getElementById('start-quiz'),
        nextButton: document.getElementById('next-question'),
        restartButton: document.getElementById('restart-quiz'),
        introSection: document.getElementById('quiz-intro'),
        questionsSection: document.getElementById('quiz-questions'),
        resultsSection: document.getElementById('quiz-results'),
        questionText: document.getElementById('question-text'),
        answerOptions: document.getElementById('answer-options'),
        feedback: document.getElementById('quiz-feedback'),
        currentQuestionSpan: document.getElementById('current-question'),
        totalQuestionsSpan: document.getElementById('total-questions'),
        userScoreSpan: document.getElementById('user-score'),
        maxScoreSpan: document.getElementById('max-score'),
        resultsMessage: document.getElementById('results-message')
    };

    // Add event listeners
    elements.startButton?.addEventListener('click', () => startQuiz(elements));
    elements.nextButton?.addEventListener('click', () => showNextQuestion(elements));
    elements.restartButton?.addEventListener('click', () => startQuiz(elements));
    elements.answerOptions?.addEventListener('click', (e) => {
        if (e.target.classList.contains('answer-option')) {
            handleAnswerSelection(e.target, elements);
        }
    });

    // Initialize counters
    if (elements.totalQuestionsSpan) {
        elements.totalQuestionsSpan.textContent = quizData.length.toString();
    }
    if (elements.maxScoreSpan) {
        elements.maxScoreSpan.textContent = quizData.length.toString();
    }
}

function startQuiz(elements) {
    // Reset state
    window.currentQuestionIndex = 0;
    window.score = 0;
    window.selectedAnswer = null;

    // Show questions, hide other sections
    if (elements.introSection) elements.introSection.style.display = 'none';
    if (elements.questionsSection) elements.questionsSection.style.display = 'block';
    if (elements.resultsSection) elements.resultsSection.style.display = 'none';

    // Load first question
    showQuestion(currentQuestionIndex, elements);
}

function showQuestion(index, elements) {
    const question = quizData[index];
    
    // Update question text and counter
    if (elements.questionText) {
        elements.questionText.textContent = question.question;
    }
    if (elements.currentQuestionSpan) {
        elements.currentQuestionSpan.textContent = (index + 1).toString();
    }

    // Clear and populate answer options
    if (elements.answerOptions) {
        elements.answerOptions.innerHTML = '';
        question.options.forEach((option, i) => {
            const div = document.createElement('div');
            div.className = 'answer-option';
            div.dataset.index = i.toString();
            div.textContent = option;
            elements.answerOptions.appendChild(div);
        });
    }

    // Reset UI state
    if (elements.nextButton) elements.nextButton.disabled = true;
    if (elements.feedback) {
        elements.feedback.textContent = '';
        elements.feedback.className = 'quiz-feedback';
        elements.feedback.style.display = 'none';
    }
}

function handleAnswerSelection(selectedOption, elements) {
    if (selectedAnswer !== null) return; // Prevent multiple selections

    selectedAnswer = parseInt(selectedOption.dataset.index);
    const question = quizData[currentQuestionIndex];

    // Reset previous selections
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });

    // Mark selected answer
    selectedOption.classList.add('selected');

    // Check answer and show feedback
    if (selectedAnswer === question.correctIndex) {
        score++;
        selectedOption.classList.add('correct');
        if (elements.feedback) {
            elements.feedback.textContent = 'Correct! ' + question.feedback;
            elements.feedback.className = 'quiz-feedback correct';
            elements.feedback.style.display = 'block';
        }
    } else {
        selectedOption.classList.add('incorrect');
        const correctOption = document.querySelector(`.answer-option[data-index="${question.correctIndex}"]`);
        if (correctOption) correctOption.classList.add('correct');
        if (elements.feedback) {
            elements.feedback.textContent = 'Incorrect. ' + question.feedback;
            elements.feedback.className = 'quiz-feedback incorrect';
            elements.feedback.style.display = 'block';
        }
    }

    // Enable next button
    if (elements.nextButton) elements.nextButton.disabled = false;
}

function showNextQuestion(elements) {
    selectedAnswer = null;
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion(currentQuestionIndex, elements);
    } else {
        showResults(elements);
    }
}

function showResults(elements) {
    // Show results section, hide questions
    if (elements.questionsSection) elements.questionsSection.style.display = 'none';
    if (elements.resultsSection) elements.resultsSection.style.display = 'block';

    // Update score display
    if (elements.userScoreSpan) {
        elements.userScoreSpan.textContent = score.toString();
    }

    // Show appropriate message based on score
    if (elements.resultsMessage) {
        const percentage = (score / quizData.length) * 100;
        let message = '';
        
        if (percentage === 100) {
            message = "Perfect score! You're a gut health history expert!";
        } else if (percentage >= 80) {
            message = "Excellent! You have a strong understanding of gut health history!";
        } else if (percentage >= 60) {
            message = "Good job! You have a solid understanding of gut health history.";
        } else if (percentage >= 40) {
            message = "Nice try! Keep learning about gut health history.";
        } else {
            message = "Keep exploring! There's more to discover about gut health history.";
        }
        
        elements.resultsMessage.textContent = message;
    }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeQuiz();
        console.log('Quiz initialized successfully');
    } catch (error) {
        console.error('Error initializing quiz:', error);
    }
});