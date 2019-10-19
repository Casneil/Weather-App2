import { GET_WEATHER } from "../actions/weather";

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        list: [...action.payload.weather]
      };
    default:
      return state;
  }
};
