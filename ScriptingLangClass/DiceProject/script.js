const btn = document.querySelector(".btn");
const input = document.getElementById("num");
const circles = document.querySelectorAll(".circle");

// Dice dot patterns for 3×3 grid
const dicePatterns = {
  1: [5],
  2: [1, 9],
  3: [1, 5, 9],
  4: [1, 3, 7, 9],
  5: [1, 3, 5, 7, 9],
  6: [1, 3, 4, 6, 7, 9]
};

function rollDice() {
  let val = parseInt(input.value);

  // if no number, choose random
  if (isNaN(val) || val < 1 || val > 6) {
    val = Math.floor(Math.random() * 6) + 1;
    input.value = val;
  }

  // hide all circles first
  circles.forEach(c => c.style.visibility = "hidden");

  // show only the correct dots
  dicePatterns[val].forEach(id => {
    document.getElementById(id).style.visibility = "visible";
  });
}

btn.addEventListener("click", rollDice);
