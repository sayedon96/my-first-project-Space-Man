/*-------------- Constants -------------*/
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
        { word: 'axolotl', hint: 'Aquatic salamander that can regenerate limbs.', difficulty: 'hard' },
        { word: 'rabbit', hint: 'Small mammal with long ears.', difficulty: 'easy' },
        { word: 'dog', hint: 'Loyal pet and human companion.', difficulty: 'easy' },
        { word: 'cat', hint: 'Independent pet that loves to climb.', difficulty: 'easy' },
        { word: 'horse', hint: 'Commonly used for riding and racing.', difficulty: 'easy' },
        { word: 'duck', hint: 'Waterfowl with a distinctive quack.', difficulty: 'easy' },
        { word: 'sheep', hint: 'Farm animal known for its wool.', difficulty: 'easy' },
        { word: 'frog', hint: 'Amphibian that can leap and croak.', difficulty: 'easy' },
        { word: 'fish', hint: 'Aquatic animal with gills and fins.', difficulty: 'easy' },
        { word: 'bird', hint: 'Creature with feathers and can often fly.', difficulty: 'easy' },
        { word: 'cow', hint: 'Farm animal that produces milk.', difficulty: 'easy' }
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
        { word: 'donnie', hint: 'A teenager is guided by a man in a rabbit suit.', difficulty: 'hard' },
        { word: 'aladdin', hint: 'Animated film about a magic lamp.', difficulty: 'easy' },
        { word: 'shrek', hint: 'An ogre\'s adventure to save a princess.', difficulty: 'easy' },
        { word: 'frozen', hint: 'Animated movie with a queen who has ice powers.', difficulty: 'easy' },
        { word: 'lion king', hint: 'Tale of a young lion\'s journey to become king.', difficulty: 'easy' },
        { word: 'finding nemo', hint: 'A clownfish\'s adventure to find his son.', difficulty: 'easy' },
        { word: 'toy story', hint: 'Life of toys when humans aren’t around.', difficulty: 'easy' },
        { word: 'cars', hint: 'Animated movie about a race car.', difficulty: 'easy' },
        { word: 'moana', hint: 'Adventure of a Polynesian girl on a sea journey.', difficulty: 'easy' },
        { word: 'cinderella', hint: 'Story of a girl, a fairy godmother, and a lost shoe.', difficulty: 'easy' },
        { word: 'beauty and the beast', hint: 'Tale as old as time, about love and transformation.', difficulty: 'easy' }
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
        { word: 'baggio', hint: 'Italian footballer famous for his missed penalty.', difficulty: 'hard' },
        { word: 'rooney', hint: 'English forward, Manchester United legend.', difficulty: 'easy' },
        { word: 'kane', hint: 'English striker known for his goal-scoring abilities.', difficulty: 'easy' },
        { word: 'xavi', hint: 'Spanish midfield maestro, known for his vision.', difficulty: 'easy' },
        { word: 'iniesta', hint: 'Spanish midfielder, Barcelona legend.', difficulty: 'easy' }
    ],
    Countries: [
        { word: 'canada', hint: 'Country known for maple syrup and ice hockey.', difficulty: 'easy' },
        { word: 'brazil', hint: 'Largest country in South America.', difficulty: 'easy' },
        { word: 'japan', hint: 'Island nation known for sushi and samurai.', difficulty: 'easy' },
        { word: 'germany', hint: 'European country known for beer and sausages.', difficulty: 'easy' },
        { word: 'australia', hint: 'Country and continent known for kangaroos.', difficulty: 'easy' },
        { word: 'usa', hint: 'Known for its diverse culture and large economy.', difficulty: 'easy' },
        { word: 'india', hint: 'Known for its rich history and diverse culture.', difficulty: 'easy' },
        { word: 'china', hint: 'Known for its Great Wall and ancient civilization.', difficulty: 'easy' },
        { word: 'france', hint: 'Known for the Eiffel Tower and fine cuisine.', difficulty: 'easy' },
        { word: 'italy', hint: 'Known for its art, history, and cuisine.', difficulty: 'easy' },
        { word: 'spain', hint: 'Known for its festivals and flamenco dancing.', difficulty: 'easy' },
        { word: 'russia', hint: 'Largest country in the world by land area.', difficulty: 'easy' },
        { word: 'mexico', hint: 'Known for its vibrant culture and cuisine.', difficulty: 'easy' },
        { word: 'egypt', hint: 'Known for its pyramids and ancient history.', difficulty: 'easy' },
        { word: 'south korea', hint: 'Known for its technology and pop culture.', difficulty: 'easy' },
        { word: 'netherlands', hint: 'European country known for its windmills and tulips.', difficulty: 'normal' },
        { word: 'thailand', hint: 'Southeast Asian country famous for its beaches and cuisine.', difficulty: 'normal' },
        { word: 'sweden', hint: 'Scandinavian country known for its design and neutrality.', difficulty: 'normal' },
        { word: 'vanuatu', hint: 'Pacific island nation known for its scuba diving and active volcanoes.', difficulty: 'hard' },
        { word: 'liechtenstein', hint: 'Small European country nestled between Switzerland and Austria.', difficulty: 'hard' },
        { word: 'kyrgyzstan', hint: 'Central Asian country known for its mountainous terrain and nomadic culture.', difficulty: 'hard' }
        ]
}    

const completedWords = [];
/*----- Cached Element References  -----*/

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
const scoreDisplay = document.getElementById("score");

/*---------- Variables (state) ---------*/

// Initializing game variables
let currentWord = '';
let correctLetters = [];
let wrongGuessCount = 0;
const maxGuesses = 6;
let score = 0;

/*-------------- Functions -------------*/
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

// const changeDifficulty = () => {
//     const currentDifficulty = difficultySelect.value;
//     if (currentDifficulty === 'easy') {
//         difficultySelect.value = 'medium';
//         alert("Congratulations! You passed the easy difficulty.\ndifficulty will be updated to normal.");
//     } else if (currentDifficulty === 'medium') {
//         difficultySelect.value = 'hard';
//         alert("Congratulations! You passed the medium difficulty.\ndifficulty will be updated to hard.");
//     } else {
//         alert("Congratulations! You've completed all difficulties.");
//     }
};

const getRandomWord = () => {
    const selectedCategory = startGameBtn.getAttribute("data-category");
    const selectedDifficulty = difficultySelect.value;
    const categoryWords = wordList[selectedCategory].filter(word => word.difficulty === selectedDifficulty && !completedWords.includes(word.word));
    if (categoryWords.length === 0) {
        // changeDifficulty();
        getRandomWord();
        return;
    }
    const { word, hint } = categoryWords[Math.floor(Math.random() * categoryWords.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
};

const startGame = () => {
    const selectedCategory = wordListSelect.value;
    startGameBtn.setAttribute("data-category", selectedCategory);
    getRandomWord();
    difficultyModal.classList.add('hidden');
};

const updateScore = () => {
    score += 5;
    scoreDisplay.innerText = score;
};

const gameOver = (isVictory) => {
    // After game complete.. showing modal with relevant details
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.querySelector("button").innerText = isVictory ? 'Countinue': 'Play Again';
    gameModal.classList.add("show");

    if (isVictory) {
        updateScore();
        completedWords.push(currentWord);
    }
};

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

