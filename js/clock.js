const clock = document.querySelector(".clock");

function clockInterval() {
  const date = new Date();
  const hour = ("00" + date.getHours()).slice(-2); // slice
  const minute = date.getMinutes();
  const second = String(date.getSeconds()).padStart(2, "0"); // padStat, padEnd

  clock.innerText = `${hour} : ${minute} : ${second}`;
}

clockInterval();
setInterval(clockInterval, 1000);
//setTimeout(clockInterval, 5000);
