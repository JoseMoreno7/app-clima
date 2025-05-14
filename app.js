async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "03eab9350ff618d9987958741bdfb968";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ciudad no encontrada");

    const data = await response.json();
    mostrarClima(data);
  } catch (error) {
    alert(error.message);
  }
}

function mostrarClima(data) {
  const ciudad = `${data.name}, ${data.sys.country}`;
  const icono = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const temperatura = `${data.main.temp}°C`;
  const descripcion = data.weather[0].description;
  const detalles = `Humedad: ${data.main.humidity}% | Viento: ${data.wind.speed} m/s`;

  document.getElementById("cityName").textContent = ciudad;
  document.getElementById("weatherIcon").src = icono;
  document.getElementById("temperature").textContent = temperatura;
  document.getElementById("description").textContent = descripcion;
  document.getElementById("details").textContent = detalles;

  document.getElementById("weatherResult").classList.remove("hidden");
}

// Footer - Año automático
  document.addEventListener("DOMContentLoaded", () => {
  	const yearSpan = document.getElementById("year");
 		 if (yearSpan) {
    		yearSpan.textContent = new Date().getFullYear();
  		}	
	});