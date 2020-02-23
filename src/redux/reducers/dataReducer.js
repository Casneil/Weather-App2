import React from "react";

import { GET_ONE_DAY, GET_SEVEN_DAYS, GET_THREE_DAYS } from "../types";

const initialState = {
  loading: false,
  data: {},
  days: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ONE_DAY:
      return {
        ...state,
        loading: !state.loading,
        data: action.payload
      };
    case GET_THREE_DAYS:
      return {
        ...state,
        loading: !state.loading,
        data: action.payload
      };
    case GET_SEVEN_DAYS:
      return {
        ...state,
        loading: !state.loading,
        data: action.payload
      };
    default:
      return state;
  }
}
