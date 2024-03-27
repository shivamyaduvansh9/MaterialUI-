import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY="149fa6ac2412eb0387f361be24e8695a";

    let getWeatherInfo = async() => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch (err) {
          throw err;
        }
    } 

    // let getWeatherInfo = async() => {
    //     // Correct API endpoint for weather data
    //     const WEATHER_API_URL = "http://api.openweathermap.org/data/2.5/weather";
        
    //     let response = await fetch(`${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    //     let jsonResponse = await response.json();
        
    //     // Check if the response contains the 'weather' and 'main' data
    //     if(jsonResponse.weather && jsonResponse.main) {
    //         let result = {
    //             temp: jsonResponse.main.temp,
    //             tempMin: jsonResponse.main.temp_min,
    //             tempMax: jsonResponse.main.temp_max,
    //             humidity: jsonResponse.main.humidity,
    //             feelsLike: jsonResponse.main.feels_like, 
    //             weather: jsonResponse.weather[0].description,
    //         };
    //         console.log(result);
    //     } else {
    //         // Handle the case where the expected data isn't present
    //         console.error("Weather data not found in the response");
    //     }
    // }
    

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit = async(evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" 
                    required value={city} onChange={handleChange}/>
            <br /> <br />
            <Button variant="contained" type='submit'>
               Search
            </Button>
            {error && <p style={{color: "Red"}}>No such place exists</p>}
             </form>
        </div>
    )
}