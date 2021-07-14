const wordEl = document.querySelector("#word");
const wrongLetterEl = document.querySelector("#wrong-letters");
const playAgainButton = document.querySelector("#play-button");
const popup = document.querySelector("#popup-container");
const notification = document.querySelector("#notification-container");
const finalMessage = document.querySelector("#final-message");
const figureParts = document.querySelectorAll(".figure-part");

const words = ["Applications", "Programming", "interface", "wizard"];

let selectedWords = words[Math.floor(Math.random() * words.length)];

const correctLetters = ["w", "i", "z", "a", "r", "d"];
const wrongLetters = [];

//show hidden word
function displayWord() {
  wordEl.innerHTML = `
        ${selectedWords
          .split("")
          .map(
            (letter) => `
            <span class = "letter">
                ${correctLetters.includes(letter) ? letter : ""}
            </span>
            `
          )
          .join("")}
    `;

  const innerWord = wordEl.innerText.replace(/\n/, "");
  if (innerWord === selectedWords) {
    finalMessage.innerText = "Congratulation ! You have won";
    popup.style.display = "flex";
  }
  console.log(innerWord);
}
displayWord();
