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
    if (value === "maze-border") alert("You lost...try again.[press that refresh I say!]");
    if (value === "finish") {
        nextButton.style.opacity = 1;
        nextButton.style.pointerEvents = "all";
        levelOne.style.pointerEvents = "none";


    }
    if (value === "end-game") {

    }

}

window.addEventListener("mousemove", (e) => {
    let check = e.target.classList.value;
    collisionCheck(check);
})

nextButton.addEventListener("click", () => {
    //style on level one 
    levelOne.style.display = "none";
    //style on the button
    nextButton.style.opacity = 0;
    nextButton.style.pointerEvents = "none";
    //style on the level 2
    levelTwo.style.display = "block";
    //ui- based classes styling and values for next level
    uiLevel.textContent = "Level 2";
    uiMessage.textContent = "One more to go...";

})