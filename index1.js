"use strict";
 
/*
Popis úkolu a podrobný návod najdeš v souboru README.md
 
Zde následuje tvůj úžasný program! ❤
*/
 
const API_KEY = "6eb469d141a0a788883bf41ba84b2de3";
const API_BASE = `http://api.openweathermap.org/data/2.5/weather?APPID=${`6eb469d141a0a788883bf41ba84b2de3`}&units=metric&lang=cz`;
 
const pocasi = document.querySelector("#pocasi");
const aktualni = document.querySelector("#aktualni");
const tlacitkoBrno = document.querySelector("#brno");
const tlacitkoParis = document.querySelector("#paris");
 
tlacitkoBrno.addEventListener("click", () => {
  ukazPocasi("brno");
});
 
tlacitkoParis.addEventListener("click", function () {
  ukazPocasi("paris");
});
 
// let mesto = "";
 
function ukazPocasi(mesto) {
  console.log("Volání ukaz pocasi na ", mesto);
  fetch(`${API_BASE}&q=${mesto}`)
    .then((response) => response.json())
    .then((data) => vypisPocasi(data));
}
 
function zmenCas(hodnota) {
  const datum = new Date(hodnota * 1000);
  let hod = datum.getHours();
  let min = datum.getMinutes();
 
  return `${hod < 10 ? "0" + hod : hod}:${min < 10 ? "0" + min : min}`;
}
 
function vypisPocasi(actual) {
  console.log(actual);
 
  const mesto = document.querySelector("#mesto");
  const ikona = document.querySelector("#ikona");
  const teplota = document.querySelector("#teplota");
  const text = document.querySelector("#popis");
  const vitr = document.querySelector("#vitr");
  const vlhko = document.querySelector("#vlhko");
  const vychod = document.querySelector("#vychod");
  const zapad = document.querySelector("#zapad");
 
 
  //teplota - zaokrouhlení
  const zaokrouhleniTeplota = Math.round(actual.main.temp);
 
  // Priřazení hodnot
  mesto.textContent = actual.name;
  text.textContent = actual.weather[0].description;
  teplota.textContent = zaokrouhleniTeplota;
  vitr.textContent = actual.wind.speed;
  vlhko.textContent = actual.main.humidity;
  vychod.textContent = zmenCas(actual.sys.sunrise);
  zapad.textContent = zmenCas(actual.sys.sunset);
 
 
  ikona.innerHTML = getWeatherIcon(
    actual.weather[0].id,
    actual.weather[0].icon
  );
}
