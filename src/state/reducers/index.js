import { getOneDay, getThreeDays, getSevenDays } from "../actions";

const initialState = {
  data: []
};

export default (state = initialState, action) => {
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
      state;
  }
};
