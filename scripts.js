document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            login();
        });
    }

    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer) {
        const quizType = window.location.pathname.split('/').pop().split('.')[0];
        loadQuiz(quizType);
    }

    const scoresContainer = document.getElementById('scoresContainer');
    if (scoresContainer) {
        loadScores();
    }
});

const quizQuestions = {
    quiz1: [
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Pb", "Fe"],
            correct: "Au"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: "Mars"
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
            correct: "Mitochondria"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Quartz"],
            correct: "Diamond"
        },
        {
            question: "Which element has the atomic number 1?",
            options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
            correct: "Hydrogen"
        },
        {
            question: "What is the main gas found in the air we breathe?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: "Nitrogen"
        },
        {
            question: "Which planet has the most moons?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: "Saturn"
        },
        {
            question: "What is the boiling point of water at sea level?",
            options: ["90°C", "100°C", "110°C", "120°C"],
            correct: "100°C"
        },
        {
            question: "What is the speed of light in a vacuum?",
            options: ["3 x 10^6 m/s", "3 x 10^7 m/s", "3 x 10^8 m/s", "3 x 10^9 m/s"],
            correct: "3 x 10^8 m/s"
        },
        {
            question: "Which scientist is known for the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
            correct: "Albert Einstein"
        }
        
    ],
    quiz2: [
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: "Mars"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: "Jupiter"
        },
        {
            question: "Which planet is closest to the Sun?",
            options: ["Earth", "Mercury", "Venus", "Mars"],
            correct: "Mercury"
        },
        {
            question: "What is the name of the galaxy we live in?",
            options: ["Andromeda", "Milky Way", "Triangulum", "Whirlpool"],
            correct: "Milky Way"
        },
        {
            question: "How many moons does Earth have?",
            options: ["1", "2", "3", "4"],
            correct: "1"
        },
        {
            question: "Who was the first human to journey into outer space?",
            options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
            correct: "Yuri Gagarin"
        },
        {
            question: "What is the name of NASA's most famous space telescope?",
            options: ["Hubble", "Kepler", "Chandra", "Spitzer"],
            correct: "Hubble"
        },
        {
            question: "Which planet is known for its rings?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: "Saturn"
        },
        {
            question: "What is the name of the second manned mission to land on the moon?",
            options: ["Apollo 11", "Apollo 12", "Apollo 13", "Apollo 14"],
            correct: "Apollo 12"
        },
        {
            question: "What is the closest star to Earth?",
            options: ["Proxima Centauri", "Alpha Centauri", "Sirius", "Betelgeuse"],
            correct: "Proxima Centauri"
        }
        
        
    ],
    
    quiz3:  
    [
        {
            question: "What is the largest land animal?",
            options: ["Elephant", "Rhinoceros", "Hippopotamus", "Giraffe"],
            correct: "Elephant"
        },
        {
            question: "Which animal is known as the King of the Jungle?",
            options: ["Lion", "Tiger", "Elephant", "Leopard"],
            correct: "Lion"
        },
        {
            question: "What is the fastest land animal?",
            options: ["Cheetah", "Lion", "Gazelle", "Horse"],
            correct: "Cheetah"
        },
        {
            question: "Which bird is known for its impressive colorful tail?",
            options: ["Peacock", "Parrot", "Eagle", "Flamingo"],
            correct: "Peacock"
        },
        {
            question: "What is the largest mammal?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correct: "Blue Whale"
        },
        {
            question: "Which animal is known to have the longest lifespan?",
            options: ["Elephant", "Blue Whale", "Giant Tortoise", "Human"],
            correct: "Giant Tortoise"
        },
        {
            question: "Which animal is known for its ability to change colors?",
            options: ["Octopus", "Chameleon", "Jellyfish", "Squid"],
            correct: "Chameleon"
        },
        {
            question: "What is the largest species of shark?",
            options: ["Great White Shark", "Hammerhead Shark", "Whale Shark", "Tiger Shark"],
            correct: "Whale Shark"
        },
        {
            question: "Which animal is known as the ship of the desert?",
            options: ["Horse", "Camel", "Elephant", "Llama"],
            correct: "Camel"
        },
        {
            question: "What is the only mammal capable of true flight?",
            options: ["Bat", "Flying Squirrel", "Eagle", "Penguin"],
            correct: "Bat"
        }
    ],
    
    quiz4: 
    [
        {
            question: "Who was the first President of the United States?",
            options: ["George Washington", "Thomas Jefferson", "John Adams", "Abraham Lincoln"],
            correct: "George Washington"
        },
        {
            question: "What year did World War II end?",
            options: ["1942", "1944", "1945", "1946"],
            correct: "1945"
        },
        {
            question: "Which empire was known as the 'Empire on which the sun never sets'?",
            options: ["Roman Empire", "British Empire", "Ottoman Empire", "Mongol Empire"],
            correct: "British Empire"
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            options: ["Amelia Earhart", "Harriet Quimby", "Bessie Coleman", "Jacqueline Cochran"],
            correct: "Amelia Earhart"
        },
        {
            question: "What was the name of the ship that carried the Pilgrims to America in 1620?",
            options: ["Santa Maria", "Mayflower", "Beagle", "Endeavour"],
            correct: "Mayflower"
        },
        {
            question: "Who wrote the Declaration of Independence?",
            options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
            correct: "Thomas Jefferson"
        },
        {
            question: "Which ancient civilization built the Machu Picchu complex in Peru?",
            options: ["Aztec", "Maya", "Inca", "Olmec"],
            correct: "Inca"
        },
        {
            question: "What was the primary cause of the American Civil War?",
            options: ["Taxation", "Slavery", "Territorial Expansion", "Trade Restrictions"],
            correct: "Slavery"
        },
        {
            question: "Who was the leader of the Soviet Union during World War II?",
            options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Leonid Brezhnev"],
            correct: "Joseph Stalin"
        },
        {
            question: "Which ancient Greek philosopher taught Alexander the Great?",
            options: ["Socrates", "Plato", "Aristotle", "Pythagoras"],
            correct: "Aristotle"
        }
    ],
    
    quiz5: 
    [
        {
            question: "What is the largest country by land area?",
            options: ["Canada", "China", "Russia", "United States"],
            correct: "Russia"
        },
        {
            question: "What is the longest river in the world?",
            options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
            correct: "Nile"
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Sahara", "Gobi", "Kalahari", "Arabian"],
            correct: "Sahara"
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            correct: "Canberra"
        },
        {
            question: "Which country has the most natural lakes?",
            options: ["Canada", "United States", "Russia", "Brazil"],
            correct: "Canada"
        },
        {
            question: "Mount Everest is located in which mountain range?",
            options: ["Andes", "Rockies", "Himalayas", "Alps"],
            correct: "Himalayas"
        },
        {
            question: "What is the smallest country in the world by land area?",
            options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
            correct: "Vatican City"
        },
        {
            question: "Which ocean is the largest by surface area?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correct: "Pacific"
        },
        {
            question: "What is the capital of Japan?",
            options: ["Osaka", "Tokyo", "Kyoto", "Hiroshima"],
            correct: "Tokyo"
        },
        {
            question: "Which continent is the Sahara Desert located on?",
            options: ["Asia", "Australia", "Africa", "South America"],
            correct: "Africa"
        }
    ],
    
    quiz6: 
    [
        {
            question: "Which Bollywood movie won the Academy Award for Best Foreign Language Film?",
            options: ["Lagaan", "Mother India", "Salaam Bombay!", "Slumdog Millionaire"],
            correct: "Slumdog Millionaire"
        },
        {
            question: "Who is known as the 'Shahenshah of Bollywood'?",
            options: ["Amitabh Bachchan", "Shah Rukh Khan", "Salman Khan", "Aamir Khan"],
            correct: "Amitabh Bachchan"
        },
        {
            question: "Which movie marked the debut of Aamir Khan as a lead actor?",
            options: ["Qayamat Se Qayamat Tak", "Raakh", "Andaz Apna Apna", "Dil"],
            correct: "Qayamat Se Qayamat Tak"
        },
        {
            question: "Which Indian movie is the highest-grossing film of all time?",
            options: ["Baahubali 2: The Conclusion", "Dangal", "PK", "Bajrangi Bhaijaan"],
            correct: "Baahubali 2: The Conclusion"
        },
        {
            question: "Who directed the critically acclaimed movie 'Rang De Basanti'?",
            options: ["Sanjay Leela Bhansali", "Rakeysh Omprakash Mehra", "Ashutosh Gowariker", "Karan Johar"],
            correct: "Rakeysh Omprakash Mehra"
        },
        {
            question: "Which actress played the lead role in 'Queen', a film about self-discovery?",
            options: ["Deepika Padukone", "Kangana Ranaut", "Anushka Sharma", "Priyanka Chopra"],
            correct: "Kangana Ranaut"
        },
        {
            question: "In which movie did Shah Rukh Khan play the character 'Raj'?",
            options: ["Kabhi Khushi Kabhie Gham", "Dilwale Dulhania Le Jayenge", "Kal Ho Naa Ho", "Chennai Express"],
            correct: "Dilwale Dulhania Le Jayenge"
        },
        {
            question: "Who is the director of the movie '3 Idiots'?",
            options: ["Rajkumar Hirani", "Farhan Akhtar", "Karan Johar", "Anurag Kashyap"],
            correct: "Rajkumar Hirani"
        },
        {
            question: "Which Indian actor starred in the Hollywood movie 'Slumdog Millionaire'?",
            options: ["Amitabh Bachchan", "Hrithik Roshan", "Shah Rukh Khan", "Anil Kapoor"],
            correct: "Anil Kapoor"
        },
        {
            question: "Which Indian movie is based on the life of sprinter Milkha Singh?",
            options: ["Bhaag Milkha Bhaag", "Mary Kom", "Chak De! India", "Dangal"],
            correct: "Bhaag Milkha Bhaag"
        }
    ]
    
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (password === 'pass') {
        alert('Login successful');
        localStorage.setItem('username', username);
        window.location.href = 'categories.html';
    } else {
        alert('Invalid credentials');
    }
}

function loadQuiz(quizType) {
    const quizContainer = document.getElementById('quizContainer');
    const questions = quizQuestions[quizType] || [];
    quizContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <h3>${q.question}</h3>
            ${q.options.map(option => `
                <div>
                    <input type="radio" name="question${index}" value="${option}">
                    <label>${option}</label>
                </div>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz(quizType) {
    const questions = quizQuestions[quizType] || [];
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.correct) {
            score++;
        }
    });
    saveScore(quizType, score);
    window.location.href = 'scores.html';
}

function saveScore(quizType, score) {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    const username = localStorage.getItem('username');
    scores.push({ username,   quizType,   score });
    localStorage.setItem('scores', JSON.stringify(scores));
    localStorage.setItem('currentScore', score);
}

function loadScores() {
    const scoresContainer = document.getElementById('scoresContainer');
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scoresContainer.innerHTML = `
        <table>
            <tr>
                <th>USERNAME</th>
                <th>QUIZ</th>
                <th>SCORE</th>
            </tr>
            ${scores.map(scoreEntry => `
                <tr>
                    <td>${scoreEntry.username}</td>
                    <td>${scoreEntry.quizType}</td>
                    <td>${scoreEntry.score}</td>
                </tr>
            `).join('')}
        </table>
    `;
}

function clearScores() {
    localStorage.removeItem('scores');
    loadScores();
}