let btnDice = document.getElementById("btn-dice");
let imageDiceRandom = document.getElementsByClassName("img-dice")[0];
let temporaryNumber1 = document.getElementById("temporary-number1");
let temporaryNumber2 = document.getElementById("temporary-number2");
let bgUser1 = document.getElementById("backgrund-user1");
let bgUser2 = document.getElementById("backgrund-user2");
// function
let score = 0;
let activePlayer = 1;
btnDice.addEventListener("click", () => {
  let randomnumber = Math.floor(Math.random() * 6 + 1);
  imageDiceRandom.src = `../image/${randomnumber}.jpg`;
  imageDiceRandom.classList.remove("d-none");

  if (randomnumber != 1) {
    score += randomnumber;
    document.getElementById(`temporary-number${activePlayer}`).textContent =
      score;
  } else {
    score = 0;
    randomnumber = 0;
    document.getElementById(`temporary-number${activePlayer}`).textContent = 0;
    score += randomnumber;
    if (activePlayer === 1) {
      activePlayer = activePlayer = 2;
      document.getElementById("backgrund-user1").classList.toggle("bg-active");
      document.getElementById("backgrund-user2").classList.remove('bg-user')
      document.getElementById("backgrund-user2").classList.toggle("bg-active");
    } else {
      activePlayer = activePlayer = 1;
      document.getElementById("backgrund-user1").classList.toggle("bg-active");
      document.getElementById("backgrund-user2").classList.remove('bg-user')
      document.getElementById("backgrund-user2").classList.toggle("bg-active");
    }
  }
});
