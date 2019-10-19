export const GET_WEATHER = "GET_WEATHER";

export const recieveWeather = weather => {
  return {
    type: GET_WEATHER,
    payload: {
      weather
    }
  };
};

// function incrementAsync() {
//     return (dispatch) => {

//     };
// }

export default recieveWeather;
