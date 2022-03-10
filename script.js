let weather = {
  apiKey: "6d9cdb5bad7c53c650c7a1e316d2a339",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6d9cdb5bad7c53c650c7a1e316d2a339&units=metric").then((response) => response.json()).then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".header").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind-speed").innerText = "Wind Speed: " + speed + "km/hr";
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + ")";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
  };

  document.querySelector("button").addEventListener("click", function (){
    weather.search();
    });

  document.querySelector("search-bar").addEventListener("keyup", function (event){
    if (event.key == "Enter") {
      weather.search();
    }
    });