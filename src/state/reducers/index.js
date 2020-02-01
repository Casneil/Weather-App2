import { getOneDay, getThreeDays, getSevenDays } from "../actions";
import { recieveData } from "../../components/Api";

const initialState = {
  data: recieveData
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case getOneDay:
      return {
        ...state,
        data: action.payload
      };
    case getThreeDays:
      return {
        ...state,
        data: action.payload
      };

    case getSevenDays:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};
