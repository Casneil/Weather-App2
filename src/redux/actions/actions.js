import React from "react";
import {
  GET_ONE_DAY,
  GET_SEVEN_DAYS,
  GET_THREE_DAYS,
  LOADING_DATA,
  SET_DATA,
  GET_DETAILS
} from "../types";

import { mapThreeDays } from "../../util/functions";

import axios from "axios";

export const getData = url => dispatch => {
  dispatch({ type: LOADING_DATA });

  axios
    .get(url)
    .then(response => {
      console.log("DATA FROM ACTION: ", response.data);
      dispatch({
        type: SET_DATA,
        payload: response.data.list
      });
      dispatch({ type: GET_DETAILS, payload: response.data.city });
    })

    .catch(error => console.log(error));
};

export const getOneDay = url => dispatch => {
  axios
    .get(url)
    .then(response => {
      dispatch({
        type: GET_ONE_DAY,
        payload: response.data.list[0].weather[0]
      });
    })
    .catch(error => console.log(error));
};

export const getThreeDays = url => dispatch => {
  axios.get(url).then(response => {
    dispatch({
      type: GET_THREE_DAYS,
      payload: mapThreeDays(response.data.list)
    });
  });
};
