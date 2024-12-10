function clock() {
  // digital_clock ka name se 1 function banaya ha aur us me pehla 1 variable bana ya phir jo html me hum ne div ko id de thi
  // us ko GET kren ga

  let digital_clock = document.querySelector("#clock");

  let date = new Date();

  let hours = date.getHours();

  let am_pm = "AM";

  if (hours > 12) {
    hours = hours - 12;
    am_pm = "PM";
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let seconds = date.getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let miliSeconds = date.getMilliseconds();

  digital_clock.innerHTML = `${hours}
    : ${minutes}: ${seconds}: ${miliSeconds}`;
}

setInterval(clock, 1000);

clock();
