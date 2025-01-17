const wordList = {
    Animals: [
        { word: 'elephant', hint: 'Large mammal with a trunk.', difficulty: 'medium' },
        { word: 'giraffe', hint: 'Tallest land animal.', difficulty: 'medium' },
        { word: 'tiger', hint: 'Big cat with stripes.', difficulty: 'medium' },
        { word: 'lion', hint: 'Known as the king of the jungle.', difficulty: 'easy' },
        { word: 'zebra', hint: 'Has black and white stripes.', difficulty: 'easy' },
        { word: 'koala', hint: 'Australian marsupial that eats eucalyptus.', difficulty: 'medium' },
        { word: 'panda', hint: 'Black and white bear that loves bamboo.', difficulty: 'medium' },
        { word: 'kangaroo', hint: 'Hops and carries its young in a pouch.', difficulty: 'medium' },
        { word: 'dolphin', hint: 'Intelligent marine mammal known for its friendliness.', difficulty: 'medium' },
        { word: 'eagle', hint: 'Bird of prey with excellent eyesight.', difficulty: 'medium' },
        { word: 'platypus', hint: 'A unique egg-laying mammal.', difficulty: 'hard' },
        { word: 'orangutan', hint: 'Great ape with long arms and reddish-brown hair.', difficulty: 'hard' },
        { word: 'armadillo', hint: 'Mammal with a protective armored shell.', difficulty: 'hard' },
        { word: 'narwhal', hint: 'Marine mammal with a long spiral tusk.', difficulty: 'hard' },
        { word: 'axolotl', hint: 'Aquatic salamander that can regenerate limbs.', difficulty: 'hard' }
    ],
    Movies: [
        { word: 'inception', hint: 'A movie about dreams within dreams.', difficulty: 'hard' },
        { word: 'gladiator', hint: 'A historical film set in ancient Rome.', difficulty: 'medium' },
        { word: 'avatar', hint: 'Sci-fi movie set on the planet Pandora.', difficulty: 'medium' },
        { word: 'titanic', hint: 'Famous ship that sank in 1912.', difficulty: 'easy' },
        { word: 'matrix', hint: 'A computer hacker learns the truth about his reality.', difficulty: 'medium' },
        { word: 'interstellar', hint: 'A journey through space to save humanity.', difficulty: 'hard' },
        { word: 'godfather', hint: 'Mafia movie about family and power.', difficulty: 'medium' },
        { word: 'jaws', hint: 'Thriller about a killer shark.', difficulty: 'medium' },
        { word: 'rocky', hint: 'Boxing film about an underdog fighter.', difficulty: 'easy' },
        { word: 'casablanca', hint: 'Classic romance set during World War II.', difficulty: 'medium' },
        { word: 'schindler', hint: 'Holocaust movie about a German businessman who saved Jews.', difficulty: 'hard' },
        { word: 'memento', hint: 'A man with short-term memory loss uses notes to find his wife’s killer.', difficulty: 'hard' },
        { word: 'amelie', hint: 'French film about a whimsical Parisian woman.', difficulty: 'hard' },
        { word: 'requiem', hint: 'A movie that depicts the impact of drug addiction.', difficulty: 'hard' },
        { word: 'donnie', hint: 'A teenager is guided by a man in a rabbit suit.', difficulty: 'hard' }
    ],
    FootballPlayers: [
        { word: 'ronaldo', hint: 'Famous Portuguese forward, multiple Ballon d\'Or winner.', difficulty: 'medium' },
        { word: 'messi', hint: 'Argentine forward known for his dribbling skills.', difficulty: 'medium' },
        { word: 'neymar', hint: 'Brazilian forward with a flair for tricks.', difficulty: 'medium' },
        { word: 'mbappe', hint: 'Young French forward, World Cup winner.', difficulty: 'medium' },
        { word: 'lewandowski', hint: 'Polish striker with a prolific goal-scoring record.', difficulty: 'hard' },
        { word: 'zidane', hint: 'French midfield maestro, known for his elegance.', difficulty: 'medium' },
        { word: 'maradona', hint: 'Argentine legend famous for the "Hand of God" goal.', difficulty: 'medium' },
        { word: 'pele', hint: 'Brazilian icon, considered one of the greatest.', difficulty: 'medium' },
        { word: 'ronaldinho', hint: 'Brazilian trickster with a contagious smile.', difficulty: 'medium' },
        { word: 'beckham', hint: 'English star known for his free-kick prowess.', difficulty: 'medium' },
        { word: 'garrincha', hint: 'Legendary Brazilian footballer known for his dribbling.', difficulty: 'hard' },
        { word: 'cannavaro', hint: 'Italian defender who won the 2006 World Cup.', difficulty: 'hard' },
        { word: 'beckenbauer', hint: 'German footballer and manager nicknamed "Der Kaiser".', difficulty: 'hard' },
        { word: 'ronaldkoeman', hint: 'Dutch defender and current football manager.', difficulty: 'hard' },
        { word: 'baggio', hint: 'Italian footballer famous for his missed penalty.', difficulty: 'hard' }
    ],
    Countries: [
        { word: 'canada', hint: 'Country known for maple syrup and ice hockey.', difficulty: 'easy' },
        { word: 'brazil', hint: 'Largest country in South America.', difficulty: 'easy' },
        { word: 'japan', hint: 'Island nation known for sushi and samurai.', difficulty: 'easy' },
        { word: 'germany', hint: 'European country known for beer and sausages.', difficulty: 'easy' },
        { word: 'australia', hint: 'Country and continent known for kangaroos.', difficulty: 'easy' },
        { word: 'kyrgyzstan', hint: 'Central Asian country known for its nomadic culture.', difficulty: 'hard' },
        { word: 'liechtenstein', hint: 'Small European country between Switzerland and Austria.', difficulty: 'hard' },
        { word: 'micronesia', hint: 'Region of thousands of small islands in the western Pacific Ocean.', difficulty: 'hard' },
        { word: 'uzbekistan', hint: 'Central Asian nation known for its historic Silk Road cities.', difficulty: 'hard' },
        { word: 'mozambique', hint: 'Southeast African country known for its Indian Ocean coastline.', difficulty: 'hard' }
    ]
};


const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const spacemanImage = document.querySelector(".spaceman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const wordListSelect = document.getElementById("word-list");
const difficultySelect = document.getElementById("difficulty");
const startGameBtn = document.querySelector(".start-game");
const difficultyModal = document.querySelector(".difficulty-modal");
const startGameButton = document.querySelector('.start-game');

// Initializing game variables
let currentWord
let correctLetters
let wrongGuessCount
const maxGuesses = 6;

const resetGame = () => {
    // Ressetting game variables and UI elements
    correctLetters = [];
    wrongGuessCount = 0;
    spacemanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    const selectedCategory = startGameBtn.getAttribute("data-category");
    const selectedDifficulty = difficultySelect.value;
    const categoryWords = wordList[selectedCategory].filter(word => word.difficulty === selectedDifficulty);
    const { word, hint } = categoryWords[Math.floor(Math.random() * categoryWords.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}
const startGame = () => {
    const selectedCategory = wordListSelect.value;
    startGameBtn.setAttribute("data-category", selectedCategory);
    getRandomWord();
    difficultyModal.classList.add('hidden');
};

const gameOver = (isVictory) => {
    // After game complete.. showing modal with relevant details
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

const initGame = (button, clickedLetter) => {
    // Checking if clickedLetter is exist on the currentWord
    if(currentWord.includes(clickedLetter)) {
        // Showing all correct letters on the word display
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // If clicked letter doesn't exist then update the wrongGuessCount and hangman image
        wrongGuessCount++;
        spacemanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true; // Disabling the clicked button so user can't click again
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Calling gameOver function if any of these condition meets
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}


startGameBtn.addEventListener("click", startGame);

playAgainBtn.addEventListener("click", getRandomWord);

