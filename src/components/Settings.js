import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCity, removeCity } from "../actions/actions";
import {Button , Form, Table} from 'react-bootstrap/';

class Settings extends Component {

  state = {
    formValue : '',
    formError: false,
    cityNotInDBError: false,
    cityDoubleError: false,
  }
     
  removeCity(city){
    this.props.dispatch(removeCity(city));
  }
  addCity(city){
    this.props.dispatch(addCity(city));
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let value = this.state.formValue.trim().toLowerCase();
    value = value.charAt(0).toUpperCase() + value.slice(1); //first letter to uppercase

    if(/^[a-zA-Z]*$/.test(value) && !this.props.cities.includes(value) && value.length > 0 ){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`) //check if city is in Open Weather Map database
      .then(res => {
        if( !res.ok ){
          this.setState({cityNotInDBError: true});
        } else {
          this.props.dispatch(addCity(value));
          this.setState({ formValue : '', formError: false, cityNotInDBError: false, cityDoubleError:false });  
        }
      })
      .then(
        (error) => { 
          console.log(error);
        }
      )
    }else if(this.props.cities.includes(value)){
      this.setState({cityDoubleError: true});
      
    }else{
      this.setState({formError: true});
    }
  }

  handleChange = (e) => {
    if(/^[a-zA-Z]*$/.test(e.target.value && e.target.value.length > 0)){
      this.setState({ formValue: e.target.value, formError: false, cityNotInDBError: false, cityDoubleError: false });
    }else{
      this.setState({ formValue: e.target.value, formError: true });
    }
  }

  render() {
    return (
      <div className="container mt-4">
        <Form className=" row" onSubmit={this.handleSubmit}>
          <Form.Control 
            type="text" 
            className="form-control col-10" 
            onChange = {this.handleChange}
            value = {this.state.formValue}
            placeholder = "Add a city"
            isInvalid = {this.state.formError}
          />               
          <Button type='submit' className='col-2' >Add</Button>
        </Form>
        {this.state.formError &&  <Form.Text id="formErrorText" style={{color:'red'}} > A city name is only composed of letters (no number, no space, ...) </Form.Text>}
        {this.state.cityNotInDBError &&  <Form.Text id="owmCityErrorText" style={{color:'red'}} > City was not found in OpenWeatherMap website </Form.Text>}
        {this.state.cityDoubleError &&  <Form.Text id="cityDoubleErrorText" style={{color:'red'}} > Widget of {this.state.formValue} already present </Form.Text>}
        <Table  bordered hover className="mt-4" >
          <thead>
            <tr>
              <th style={{width:'10%'}}>#</th>
              <th style={{width:'80%'}}>City Name</th>
              <th style={{width:'10%'}}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cities.map((cityName,index) => 
              <tr key={cityName}>
                <td>{index}</td>
                <td>{cityName}</td>
                <td>
                  <Button id="delete-button" variant="outline-danger" onClick={() => this.removeCity(cityName)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                  </Button>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
 
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {cities: state.cities}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
