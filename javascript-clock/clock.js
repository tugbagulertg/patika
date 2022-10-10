let name1 = prompt("Lütfen adınızı giriniz.");
let nameArea = document.getElementById("myName");
if (name1 != null) {
  let son =
    name1[0].toUpperCase() +
    name1.substring(1, name1.length).toLowerCase() +
    "";
  nameArea.innerHTML = son;
}
let dateArea = document.getElementById("myClock");

function showTime() {
  const ddd = new Date();
  let hour = ddd.getHours();
  let minute = ddd.getMinutes();
  let sec = ddd.getSeconds();
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  if (hour < 10) {
    hour = `0${hour}`;
  } else {
    hour = hour;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  } else {
    minute = minute;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  } else {
    sec = sec;
  }

  let day = days[ddd.getDay()];
  let full = `${hour}:${minute}:${sec} ${day}`;
  dateArea.innerHTML = full;
}
setInterval(showTime, 1000);
