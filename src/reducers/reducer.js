import { ADD_CITY, REMOVE_CITY } from "../constants/action-types";


const initialState = {
    cities: ['London', 'Paris', 'Berlin', 'Shanghai']
  };
  
  function reducer(state = initialState, action) {
    let nextState;
    switch(action.type){
      case ADD_CITY: 
        nextState = {...state, cities : [...state.cities, action.payload]};
        return nextState;
      case REMOVE_CITY:  
        nextState = {...state,  cities : [...state.cities]};
        nextState.cities.splice(nextState.cities.indexOf(action.payload),1);
        return nextState;
      default: 
        return state;
    }
  };
  
  export default reducer;