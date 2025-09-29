import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
// import { use, useState } from 'react';
// const API_KEY = import.meta.env.VITE_API_KEY;
export default function InfoBox({info}){
    
    const HOT_URL = "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1462040700793-fcd2dbc0edf0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">
            <h1 style={{fontFamily: "Roboto"}}>Weather: {info.weather}</h1>
    <div>   
    <Card sx={{ minWidth: 500, minHeight: 450 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={info.temp > 30 ? HOT_URL : info.temp < 10 ? COLD_URL : RAIN_URL}
        title="Weather"
      />
      
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
           {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
            Temperature: {info.temp}°C<br/> <br />
            Feels Like: {info.feelsLike}°C<br/><br />
            Min Temperature: {info.tempMin}°C<br/><br />
            Max Temperature: {info.tempMax}°C<br/><br />
            Humidity: {info.humidity}%<br/>
           
        </Typography>
      </CardContent>
      
    </Card>
       </div>
        </div>
    )
}