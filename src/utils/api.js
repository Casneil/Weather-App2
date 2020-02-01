//   // Api Request and Key
const API_KEY = "15f9cc886ac24f548f6fb49bc3ea7913";
const request = `https://api.weatherbit.io/v2.0/forecast/daily?city="berlin"&key=${API_KEY}`;

//Get Weather Data
export const getWeather = async () => {
  const api_call = await fetch(request);
  const response = await api_call.json();
  // return response;
  console.log(response);

  // setData(response);
  // setOneDay(response.data[0]);
};
