// Sare box ko querySelectorAll se get kiya
let boxes = document.querySelectorAll(".box");

// Reset Button ko get kiya id se
let resetBtn = document.querySelector("#reset-btn");

//New game wale button ko get kiya
let newGameBtn = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");


//yahan hum ne aik variable banaya ha ta ka hamen pata chal sake ka kis player ka turn ha
//jesa variable banaya turnO ka or usa true kr diya ab jab bhe ya true hoga hoga tw hamere pas box ma O likha hua aye ga aur agar ya false hua tw hamare pas X likha hua aye ga.
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const showWinner = (Winner) => {
  msg.innerHTML = `Congragulations, Winner is ${Winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    console.log(pattern[0], pattern[1], pattern[2]);
    console.log(
      boxes[pattern[0]].innerHTML,
      boxes[pattern[1]].innerHTML,
      boxes[pattern[2]].innerHTML
    );

    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);

        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
