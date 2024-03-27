import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1567448786891-efeeb717a231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlydHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZCUyMCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1909144145/photo/one-couple-have-fun-and-enjoy-bad-weather-rain-under-a-transparent-umbrella-smiling-together.webp?b=1&s=170667a&w=0&k=20&c=jbJW8DlgPbGXIXUfhsjHwwnCuPY1XjWQJeP7mz-86u0=";

    return( 
        <div className="InfoBox">
            <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }} >
              <CardMedia sx={{ height: 140 }} 
              image={info.humidity > 80 ? RAIN_URL: info.temp > 15 ? HOT_URL : COLD_URL}
              />
             <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                   info.humidity > 80 ? <ThunderstormIcon />: info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
                }
              </Typography>
             <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temprature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Min Temp = {info.tempMax}&deg;C</p>
                <p>The weather can be described as <i>{info.weather}</i> and feels_like = {info.feels_like}&deg;C</p>
              </Typography>
             </CardContent>
             </Card>
            </div>
        </div>
    )
}