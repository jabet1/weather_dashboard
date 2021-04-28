import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import '../font/weather-icons.min.css'


class Widget extends Component {
    constructor(props){
        super(props);
        this.cityName = this.props.cityName;
        this.cityCountry = '';
        this.state = {
            temperature : 0,
            icon: '900',
            time: '12:00'
        };
    }

   componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
          .then(res => res.json())
          .then(
            (result) => {
                const {weather : [{id : icon}], main : {temp : temp}, timezone : timezone, sys : {country : country}} = result; // extract icon, temp, timezone and city country from result
                const date = new Date();
                let hour = (date.getUTCHours() + timezone/3600) % 24;
                let minutes = date.getUTCMinutes();
                hour = hour >= 0 ? hour : hour + 24;
                hour = hour < 10 ? '0' + hour : hour;
                minutes = minutes < 10 ? '0'+ minutes : minutes;
                this.cityCountry = country;
                this.setState({
                    temperature: temp,
                    icon: icon,
                    time: `${hour}:${minutes}`
                });
            },
            (error) => { 
              console.log(error)
            }
          )
      }

    render(){
        return(
          <div className="col-md-6 pt-2 ">
            <Card >
              <div className="row">
                <div className="col-md-8 col-6 my-auto"> 
                  <div className="col-sm-12 ">
                    {`${this.cityName},${this.cityCountry}`}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <i className="wi wi-thermometer"></i>
                      {` ${this.state.temperature}°c `}                      
                    </div>
                    <div className="col-md-6">
                      <i className="wi wi-time-1"></i>
                      {` ${this.state.time} `}
                    </div>
                  </div> 
                </div>   
                <div className="col-md-4 col-6">
                  <i className={`wi wi-owm-${this.state.icon} display-4 m-1` }></i>      
                </div> 
              </div>
            </Card>
          </div>


        )
    }
}

export default Widget
