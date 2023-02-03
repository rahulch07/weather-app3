import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'



function WeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    axios.get(`https://weather-app2-theta-pearl.vercel.app/${currentPage}`)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [currentPage]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  const itemsPerPage = 10;
  const totalPages = 3;

  const startIndex = (currentPage - 1) * itemsPerPage;
  //const icon = `http://openweathermap.org/img/wn/50n@2x.png`
  
  //console.log(weatherData.list[0])
  const center = [23.0333,72.6167];

  return (
    
    <div>
      
    <div>
      {weatherData.list.map(city => (
        <div key={city.id} id="cnt" className=''>
          <div className='container' id='ctn2'>
          <div className='row'>
         
            <div className='col-4' id='ctn3'>
          <div>
          <h2 className='fw-bolder'>{city.name}, {city.sys.country}</h2>
          </div>
          
          <div><div><img src="http://openweathermap.org/img/wn/50n@2x.png" width="50px" height="50px" style={{marginTop:-20}}></img><span className='fs-1' style={{marginLeft:-15}}> {Math.round(city.main.temp - 273.15)}°C</span></div></div>
          <div> <span className='fw-semibold'>Feels like {Math.round(city.main.feels_like - 273.15)}°C. {city.weather[0].main} </span> 
          <ul id='li'>
            <li id='li2'><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
               <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
               </svg>{city.wind.speed}m/s </div>
            </li>
            <li id='li2'>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
</svg>{city.main.pressure}Pa </div>
            </li>
            <li id='li2'>
              Humidity:{city.main.humidity}% 
            </li>
            <li id='li2'>
              Visiblity:{city.visibility}m 
            </li>
          </ul>
          </div>
          </div>
          <MapContainer center={[city.coord.lat , city.coord.lon]}
        zoom={10} id="map" className='col-8'>
        
        <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={[city.coord.lat , city.coord.lon]}>
        <Popup>
         
        <div><div><img src="http://openweathermap.org/img/wn/50n@2x.png" width="50px" height="50px" style={{marginTop:-20}}></img><span className='fs-2' style={{marginLeft:-15}}> {Math.round(city.main.temp - 273.15)}°C</span></div></div>
          <div> <span className='fw-semibold'>Feels like {Math.round(city.main.feels_like - 273.15)}°C. {city.weather[0].main} </span> 
          <ul id='li'>
            <li id='li2'><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
               <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
               </svg>{city.wind.speed}m/s </div>
            </li>
            <li id='li2'>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
</svg>{city.main.pressure}Pa </div>
            </li>
            <li id='li2'>
              Humidity:{city.main.humidity}% 
            </li>
            <li id='li2'>
              Visiblity:{city.visibility}m 
            </li>
          </ul>
          </div>
         
        </Popup>
        </Marker>
        </MapContainer>
          </div>
          </div>
        </div>
      ))}
    </div>

<div className='pagination' id='pagination'>
<button disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)} className="page-item">
  Prev
</button>


<div>
        {Array.from({length: totalPages}, (_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)} className="page-item">{index + 1}</button>
        ))}
      </div>

<button disabled={currentPage > 2} onClick={() => setCurrentPage(currentPage + 1)} className="page-item">
  Next
</button>
</div>
</div>
  );
}

export default WeatherData;