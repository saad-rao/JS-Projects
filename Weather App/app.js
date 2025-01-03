const button = document.getElementById("search-btn");

const input = document.getElementById("search-inp");

let cityName = document.getElementById("city-name");

let cityTime = document.getElementById("city-time");

let cityTemp = document.getElementById("city-temp");

let cityHumidity = document.getElementById("city-humidity");

async function getData(cityName) {
  let promise = await fetch(
   `https://api.weatherapi.com/v1/current.json?key=bf4a9126b58f492896c70145243112&q=${cityName}&aqi=yes`
  );

  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  cityName.innerHTML = `${result.location.name}, ${result.location.region}-${result.location.country}`;
  cityTime.innerHTML = `Localtime :${result.location.localtime}`;
  cityTemp.innerHTML = `Temperature :${Math.round(result.current.temp_c)}*C`;
  cityHumidity.innerHTML = `Humidity: ${result.current.humidity}Km/h `;
});
