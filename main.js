// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

// Letters Container
const lettersContainer = document.querySelector(".letters");

// Generate Letters

lettersArray.forEach((letter) => {
  // Create Span
  let span = document.createElement("span");

  // Create letter text
  let text = document.createTextNode(letter);

  // Append The Text To Span
  span.appendChild(text);

  // Add Class To Span
  span.className = "letter-box";

  // Append Span ToThe Letters Container
  lettersContainer.appendChild(span);
});

// Onject Of Words And Categeories
const words = {
  programming: ["php", "javascript", "mysql", "python"],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Triangle",
    "Coco",
    "Up",
    "Divergent",
    "Shawshank Redemption",
    "Green Mile",
    "Seven",
    "Enola Holmes",
    "Victor Frankenstein",
    "Spiderman",
    "Thor",
    "Doctor Strange",
    "Malifecent",
    "Moana",
    "Robanzel",
  ],
  celeberties: [
    "Einstein",
    "Cleopatra",
    "Brad Pitt",
    "Angelena Jolie",
    "Messi",
    "Christiano",
    "Mohamed Salah",
    "Dina El Sherbiny",
    "Aser Yassin",
    "Karim Abdel aziz",
    "Donia Samir Ghanem",
    "Emy Samir Ghanem",
    "Sherif Salama",
    "Ahmed El awady",
    "Hassan El radad",
    "Yasmin Abdel aziz",
    "Hana El zahed",
    "Maged El Kedwani",
    "Amina Khalil",
    "Ahmed Malik",
  ],
  countries: [
    "Egypt",
    "England",
    "Canada",
    "Germany",
    "Morocco",
    "Palastine",
    "Syria",
    "Japan",
    "China",
    "Korea",
    "Spain",
    "France",
    "USA",
    "Jordan",
    "Iraq",
    "Libya",
    "Saudi Arabia",
    "Nigeria",
    "Russia",
    "Poland",
    "Greece",
    "Senegal",
    "Tunisia",
    "Sudan",
    "Argentina",
    "Brazil",
    "India",
    "Italy",
    "Maldives",
    "Ghana",
  ],
  kitchen: [
    "Spoon",
    "Fork",
    "Oven",
    "Dish",
    "Fridge",
    "Knife",
    "Cook",
    "Cup",
    "Pan",
  ],
  singers: [
    "Shakira",
    "Zayn Malik",
    "Michel Jackson",
    "Halsey",
    "Om Kulthum",
    "Asmahan",
    "Shereen",
    "Elisa",
    "Nancy Agram",
    "Amir Eid",
    "Tamer Hosny",
    "Amr Diab",
  ],
  food: [
    "Koshari",
    "Bechamel",
    "Mahshi",
    "Sushi",
    "Pizza",
    "Burger",
    "Fish",
    "Shawrma",
    "Chiken",
    "Kofta",
  ],
  rappers: [
    "Wegz",
    "Marwan Mousa",
    "Abyusif",
    "Marwan Pablo",
    "Shab Jedid",
    "Ziad Zaza",
    "Shehab",
    "Legecy",
  ],
  animals: [
    "Panda",
    "Monkey",
    "Lion",
    "Cat",
    "Dog",
    "Donkey",
    "Tiger",
    "Elelphant",
    "Giraff",
    "Bear",
    "Fish",
    "Shark",
    "Dolphin",
    "Snake",
    "Frog",
    "Mouse",
    "Turtle",
    "Deer",
    "Zebra",
    "Cow",
    "Buffalo",
  ],
  color: [
    "Pink",
    "Red",
    "Purple",
    "Green",
    "Yellow",
    "White",
    "Brown",
    "Black",
    "Grey",
    "Blue",
    "Biege",
  ],
  cars: [
    "Toyota",
    "ford",
    "audi",
    "bmw",
    "honda",
    "mercedes",
    "nissan",
    "Chevrolet",
    "borche",
    "Hyundai",
  ],
  fruit: [
    "Apple",
    "mango",
    "Banana",
    "orange",
    "grapes",
    "Peach",
    "Guava",
    "watermelon",
    "strawberry",
    "pineapple",
    "Kiwi",
  ],
};

// Get A Random Property
let allKeys = Object.keys(words);

let randomKey = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomKey];

let randomPropValue = words[randomPropName];
let randomValue = Math.floor(Math.random() * randomPropValue.length);
let randomValueName = randomPropValue[randomValue];

// Set Category Info
document.querySelector(".category span").innerHTML = randomPropName;

// Select Letters Guess Element
let lettersGuess = document.querySelector(".letters-guess");

// Convert Word To Array
let lettersAndSpaces = Array.from(randomValueName);

// Create Spans Depending On The Words
lettersAndSpaces.forEach((letter) => {
  // Create Empty Span
  let span = document.createElement("span");

  // Check If Words Has A Space
  if (letter === " ") {
    span.className = "has-space";
  }

  //Append Span To Guess Container
  lettersGuess.appendChild(span);
});

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts
let wrongAttempts = 0;

// Set Correct Attempts
let correctAttempts = 0;

// Select The Draw Elements
let theDraw = document.querySelector(".hangman-draw");

// Set Game Status
let gameStatus = true;

// Check Guessed word
function checkIfWordGuessed() {
  const guessedWord = Array.from(guessSpans)
    .map((span) => span.innerHTML.toLowerCase())
    .join("");
  const originalWord = randomValueName.toLowerCase().replace(/\s/g, "");
  return guessedWord === originalWord;
}

// Handle Clicking On Letters
document.addEventListener("click", (e) => {
  // Set Status
  if (!gameStatus) return;
  let theStatus = false;

  // Set Clicked Class
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    // Get Clicked Letter
    let clickedLetter = e.target.innerHTML.toLowerCase();

    // Chosen Word
    let chosenWord = Array.from(randomValueName.toLowerCase());

    chosenWord.forEach((wordLetter, letterIndex) => {
      if (clickedLetter === wordLetter) {
        // Set Status To True
        theStatus = true;

        // Loop On Guess Spans
        guessSpans.forEach((span, spanIndex) => {
          if (letterIndex === spanIndex) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });

    // Overlay
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    // If Letter Is Wrong
    if (theStatus !== true) {
      //Increment Wrong Attempts
      wrongAttempts++;

      // Add Class Wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      // Play Fail Sound
      document.getElementById("fail").play();

      // Finalize The Game

      if (wrongAttempts === 9) {
        endGame();
        lettersContainer.classList.add("finished");
        overlay.style.display = "block";
      }
    } else {
      if (checkIfWordGuessed()) {
        winGame();
        gameStatus = false;
        overlay.style.display = "block";
      }
      // Play Success Sound
      document.getElementById("success").play();
    }
  }
});

// End Game Function
function endGame() {
  // Create Pop Up Div
  let div = document.createElement("div");

  // Append Gif
  let gameOver = document.querySelector(".gameover");

  div.appendChild(gameOver);
  gameOver.style.display = "block";
  // Create Text
  let divText = document.createTextNode(
    `Game Over The Word is **${randomValueName}**`
  );

  // Append Text To Div
  div.appendChild(divText);

  // Add Calss To Div
  div.className = "popup";

  // Append To The Body
  document.body.appendChild(div);
  document.getElementById("lose").play();
}

function winGame() {
  // Create Pop Up Div
  let div = document.createElement("div");

  // Append Gif
  let congrats = document.querySelector(".congrats");

  div.appendChild(congrats);
  congrats.style.display = "block";
  // Create Text
  let divText = document.createTextNode(`Congratulations`);

  // Append Text To Div
  div.appendChild(divText);

  // Add Calss To Div
  div.className = "popup-win";

  // Append To The Body
  document.body.appendChild(div);
  document.getElementById("win").play();
}
