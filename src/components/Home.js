import React, { Component } from 'react'
import { connect } from "react-redux";


import Widget from './Widget.js'

class Home extends Component {
 
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.cities.map((city) => (
            <Widget
              cityName = {city}
              key = {city}
            /> )
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { //redux : link global stat to props
  return {cities: state.cities}
}

export default connect(mapStateToProps)(Home);
