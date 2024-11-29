function press(e) {
  document.getElementById("input").value += e;
}
function eq() {
  var a = document.getElementById("input");
  a.value = eval(a.value);
}

function clr() {
  document.getElementById("input").value = " ";
}

function clr1() {
  document.getElementById("input").value;
  input.value = input.value.slice(0, input.value.length - 1);
}

function dlt() {
  var dlt = [document.getElementById("input").value];

  let randomIndex = Math.random() * dlt.length;
  //    console.log(randomId);
  let roundIndex = Math.floor(randomIndex);

  let displayNum = dlt[roundIndex];

  console.log(displayNum);
}
