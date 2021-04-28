import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { createPortal } from 'react-dom'



class Widget extends Component {
    constructor(props){
        super(props)
        this.cityName = this.props.cityName
        this.icon = 'iconName'
        this.state = {
            temperature : 0
        }
    }

    /*componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
          .then(res => res.json())
          .then(
            (result) => {
                const  {main : {temp : temp}} = result // extract temp from result
                this.setState({
                    temperature: temp
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
            <div className='widget'>
                {`${this.cityName} : ${this.state.temperature}°c : ${this.icon}`}
                <br></br>
            </div>
        )
    }
}









export default Widget
