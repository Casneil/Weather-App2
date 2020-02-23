import {
  GET_ONE_DAY,
  GET_SEVEN_DAYS,
  GET_THREE_DAYS,
  LOADING_DATA,
  SET_DATA,
  GET_DETAILS
} from "../types";

import axios from "axios";

export const getData = url => dispatch => {
  dispatch({ type: LOADING_DATA });

  axios
    .get(url)
    .then(response => {
      dispatch({
        type: SET_DATA,
        payload: response.data.data
      });
      dispatch({ type: GET_DETAILS, payload: response.data });
    })

    .catch(error => console.log(error));
};
