import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCity, removeCity } from "../actions/actions";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

class Settings extends Component {
  
  state = {
    formValue : '',
  }
     
  removeCity(city){
    console.log('delete : ' + city)
    this.props.dispatch(removeCity(city))
  }
  addCity(city){
    this.props.dispatch(addCity(city))
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let value = this.state.formValue;
    value = value.trim();
    
    this.props.dispatch(addCity(value))
    this.setState({ city : '' });
  }

  handleChange = (e) => {
    this.setState({ formValue: e.target.value });
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
          />                 
          <Button type='submit' className='col-2' >Valider</Button>
        </Form>
        <Table  bordered hover className="mt-4" >
          <thead>
            <tr>
              <th style={{width:'10%'}}>#</th>
              <th style={{width:'80%'}}>City Name</th>
              <th style={{width:'10%'}}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cities.map((v,index) => 
              <tr key={v}>
                <td>{index}</td>
                <td>{v}</td>
                <td>
                  <Button variant="outline-danger" onClick={() => this.removeCity(v)}>
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
