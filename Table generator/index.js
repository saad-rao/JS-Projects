function printTable() {
  let tableNum = parseInt(document.getElementById("tableNum").value);

  let range = parseInt(document.getElementById("range").value);

  let output = document.getElementById("output");

  if (isNaN(tableNum) || isNaN(range) || tableNum <= 0 || range <= 0) {
    output.innerHTML = "Please enter valid number";
    return;
  }

  document.body.innerHTML = "";

  document.write(`<h1>Multiplication table for ${tableNum}</h1>`);

  for (let i = 1; i <= range; i++) {
    document.write(`${tableNum} x ${i} = ${tableNum * i}<br>`);
  }
}
