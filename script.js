let player_one = document.querySelector(".player_one");
let player_two = document.querySelector(".player_two");
let inputone = document.querySelector(".inputone");
let inputtwo = document.querySelector(".inputtwo");
let btnone = document.querySelector(".btnone");
let btntwo = document.querySelector(".btntwo");
let button =document.querySelector(".button");
let result = document.querySelector(".result");
let attamp = 0;
btnone.addEventListener("click", () => {
  if (inputone.value == "") {
    alert("please enter a number");
  } else if (inputone.value >= 10) {
    alert("plese enter a value less then 10");
  } else {
    player_one.style.display = "none";
    player_two.style.display = "block";
  }
});
btntwo.addEventListener("click", () => {
  attamp++;
  let i2value = inputtwo.value;
  let i1value = inputone.value;
  if (inputtwo.value == "") {
    alert("please enter a number");
  } else if (inputtwo.value >= 10) {
    alert("plese enter a value less then 10");
  } else if (attamp ==5 && i1value != i2value) {
    result.innerHTML = "PLAYER ONE WINNER";
  } else if (inputone.value == inputtwo.value) {
    result.innerHTML = "PLAYER TWO WINNER";
  }
});
button.addEventListener("click", () =>{
  window.location.reload();
});
