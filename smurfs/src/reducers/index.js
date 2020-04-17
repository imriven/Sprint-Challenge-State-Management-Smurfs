/*
  Be sure to import in all of the action types from `../actions`
*/
import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAIL,
    DELETE_SMURF_FAIL,
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS
  } from "../actions";
  
  export const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    error: null,
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case FETCH_SMURFS_START:
        return { ...state, fetchingSmurfs: true };
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          fetchingSmurfs: false,
          error: null,
        };
      case FETCH_SMURFS_FAIL:
        return {
          ...state,
          smurfs: [],
          fetchingSmurfs: false,
          addingSmurf: false,
          error: action.payload,
        };
      case ADD_SMURF_START:
        return { ...state, fetchingSmurfs: false, addingSmurf: true };
      case ADD_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          addingSmurf: false,
          error: null,
        };
      case ADD_SMURF_FAIL:
        return {
          ...state,
          smurfs: [],
          fetchingSmurfs: false,
          addingSmurf: false,
          error: action.payload,
        };
        case DELETE_SMURF_START:
        return state ;
      case DELETE_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          error: null,
        };
      case DELETE_SMURF_FAIL:
        return {
          ...state,
          smurfs: [],
          fetchingSmurfs: false,
          addingSmurf: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  
  /*
    You'll only need one smurf reducer for this project.
    Feel free to export it as a default and import as rootReducer. 
    This will guard your namespacing issues.
    There is no need for 'combineReducers' in this project.
    Components can then read your store as, `state` and not `state.fooReducer`.
  */
  