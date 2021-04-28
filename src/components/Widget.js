import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { createPortal } from 'react-dom'

import Card from 'react-bootstrap/Card'
import '../font/weather-icons.min.css'


class Widget extends Component {
    constructor(props){
        super(props)
        this.cityName = this.props.cityName
        this.state = {
            temperature : 0,
            icon: '900',
            time: '12:00'
        }
    }

   /*componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
          .then(res => res.json())
          .then(
            (result) => {
                const {weather : [{id : icon}], main : {temp : temp}, timezone : timezone} = result; // extract icon, temp and timezone from result
                const date = new Date();
                let hour = (date.getUTCHours() + timezone/3600) % 24;
                hour = hour >= 0 ? hour : hour + 24; 
                this.setState({
                    temperature: temp,
                    icon: icon,
                    time: `${hour}:${date.getUTCMinutes()}`
                });

            },
            (error) => { // qu'est ce que j'en fais de ca ? 
              this.setState({
                error
              });
            }
          )
      }*/

    render(){
        return(
          <div className="col-sm-6 p-1">
            <Card >
              <div className="row">
                <div className="col-md-8 col-6"> 
                  <div className="col-sm-12">
                    {this.cityName}
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <i className="wi wi-thermometer"></i>
                      {` ${this.state.temperature}°c `}
                      
                    </div>
                    <div className="col-sm-6">
                      <i className="wi wi-time-1"></i>
                      {` ${this.state.time} `}
                    </div>
                  </div> 
                </div>   
                <div className="col-md-4 col-6">
                  <i className={`wi wi-owm-${this.state.icon} w-100 h-100 display-4`}></i>      
                </div> 
              </div>
            </Card>
          </div>


        )
    }
}

export default Widget
