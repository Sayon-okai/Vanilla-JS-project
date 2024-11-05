// Arrays of colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// creating a btn var that is assigned the value of the html button id "btn"

const btn = document.getElementById('btn');
// creating a color var that is assigned the value of the html span class "color"
const color = document.querySelector(".color");

// Adding evenListener to btn for click
btn.addEventListener('click', function() {
    // anonymous function that runs when the button is click
    
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    // accessing html document body and property
    document.body.style.backgroundColor = colors[randomNumber];
    // accessing the text content in the html class color
    color.textContent = colors[randomNumber];
  

})

function getRandomNumber() {
    return Math.floor (Math.random() * colors.length);
}
