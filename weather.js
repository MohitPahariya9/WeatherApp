const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '45029e72a9msh023c7f3d1fd9977p1e3b03jsnf94bd2e90e87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
  cityName.innerHTML =  city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      temp.innerHTML = response.temp;
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      // wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch(err => console.error(err));
}

const getLucknowAndBostonWeather = async () => {
	try {
	  const cities = ["Lucknow", "London", "HongKong", "Boston", "Chandigarh"];
	  for (let city of cities) {
		const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
		const data = await response.json();
		console.log(`Weather data for ${city}:`, data);
		
		const tempElement = document.querySelector(`#${city.toLowerCase()}-temp`);
		const cloudElement = document.querySelector(`#${city.toLowerCase()}-cloud`);
		const humidityElement = document.querySelector(`#${city.toLowerCase()}-humidity`);
		const windElement = document.querySelector(`#${city.toLowerCase()}-wind_speed`);
		const sunriseElement = document.querySelector(`#${city.toLowerCase()}-sunrise`);
		const sunsetElement = document.querySelector(`#${city.toLowerCase()}-sunset`);
		tempElement.innerHTML = data.temp;
		cloudElement.innerHTML = data.cloud_pct;
		humidityElement.innerHTML = data.humidity;
		windElement.innerHTML = data.wind_speed;
		sunriseElement.innerHTML = data.sunrise;
		sunsetElement.innerHTML = data.sunset;
	  }
	} catch (error) {
	  console.error("Error fetching weather data:", error);
	}
  };

submit.addEventListener("click", (e)=>{
  e.preventDefault();
  getWeather(city.value);
})

getWeather("Delhi");
getLucknowAndBostonWeather();


