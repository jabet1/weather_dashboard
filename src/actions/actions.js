
import { ADD_CITY, REMOVE_CITY } from "../constants/action-types";


export function addCity(payload) {
    return { type: ADD_CITY, payload }
};

export function removeCity(payload) {
    return { type: REMOVE_CITY, payload }
};