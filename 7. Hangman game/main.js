const wordEl = document.querySelector("#word");
const wrongLetterEl = document.querySelector("#wrong-letters");
const playAgainButton = document.querySelector("#play-button");
const popup = document.querySelector("#popup-container");
const notification = document.querySelector("#notification-container");
const finalMessage = document.querySelector("#final-message");
const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wizard"];
const selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ["r"];
const wrongLetters = [];

//show hidden word
function displayWord() {
  wordEl.innerHTML = `
        ${selectedWord
          .split("")
          .map(
            (letter) =>
              `<span class = "letter">${
                correctLetters.includes(letter) ? letter : ""
              }</span>`
          )
          .join("")}
    `;
}
