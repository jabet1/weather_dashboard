import { ADD_CITY, REMOVE_CITY } from "../constants/action-types";


const initialState = {
    cities: ['London', 'Paris', 'Berlin']
  };
  
  function reducer(state = initialState, action) {
    let nextState;
    switch(action.type){
      case ADD_CITY: // check que ca n'existe pas deja
        nextState = {cities : [...state.cities, action.payload]};
        return nextState;
      case REMOVE_CITY: // bug si la ville pas dans le state : retire la derniere ville 
        nextState = {...state};
        nextState.cities.splice(nextState.cities.indexOf(action.payload),1);
        return nextState;
      default: 
        return state;
    }
  };
  
  export default reducer;