import React, { Component } from 'react'
import { createPortal } from 'react-dom';
import { connect } from "react-redux";


import Widget from './Widget.js'

class Home extends Component {
  
  state = {
    cities : this.props.cities
  }
  
  render() {
    return (
      <div className="Home">
        {this.state.cities.map((city) => (
          <Widget
            cityName = {city}
            key = {city}
          /> )
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {cities: state.cities}
}

export default connect(mapStateToProps)(Home);