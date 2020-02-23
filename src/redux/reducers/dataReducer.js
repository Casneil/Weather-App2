import React from "react";

import {
  GET_ONE_DAY,
  GET_SEVEN_DAYS,
  GET_THREE_DAYS,
  LOADING_DATA,
  SET_DATA,
  GET_DETAILS
} from "../types";

const initialState = {
  loading: false,
  data: [],
  days: {},
  details: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        loading: !state.loading,
        data: action.payload
      };
    case GET_ONE_DAY:
      return {
        ...state,
        loading: !state.loading,
        days: action.payload
      };
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload
      };
    case GET_THREE_DAYS:
      return {
        ...state,
        loading: !state.loading,
        days: action.payload
      };
    case GET_SEVEN_DAYS:
      return {
        ...state,
        loading: !state.loading,
        days: action.payload
      };
    case LOADING_DATA:
      return {
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
}
