//next-button
const nextButton = document.querySelector(".next-button");
//svg mazes
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
//UI MESSAGES
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");
//End Game
const spookyPicture = document.querySelector(".spooky-picture");
const screamSound = document.querySelector(".scream-sound");

const collisionCheck = (value) => {
    if (value === "maze-border") alert("You lost...try again.");
    if (value === "finish") {

    }
    if (value === "end-game") {

    }

}

window.addEventListener("mousemove", (e) => {
    let check = e.target.classList.value;
    collisionCheck(check);
})

nextButton.addEventListener("click", () => {

})