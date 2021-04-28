import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCity, removeCity } from "../actions/actions";


class Settings extends Component {
   
  removeCity(city){
    this.props.dispatch(removeCity(city))
  }
  addCity(city){
    this.props.dispatch(addCity(city))
  }
  render() {
    return (
      <div className="Settings">
        {'settings'}
        <button onClick={() => this.removeCity('Paris')}>bye</button>
        <button onClick={() => this.addCity('Paris')}>SALUT</button>

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
