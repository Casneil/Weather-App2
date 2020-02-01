import React, { useState, createContext, useEffect } from "react";
import { getWeather } from "../utils/api";

const WeatherContext = createContext();

const WeatherProvider = props => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Berlin");
  const [data, setData] = useState([]);
  const [oneDay, setOneDay] = useState([]);
  // const [fiveDays, setFiveDays] = useState([]);

  const getSearch = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setQuery(search);
  };

  //   // Api Request and Key
  const API_KEY = "15f9cc886ac24f548f6fb49bc3ea7913";
  const request = `https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=${API_KEY}`;

  //Get Weather Data
  const getWeather = async () => {
    const api_call = await fetch(request);
    const response = await api_call.json();
    setData(response);
    setOneDay(response.data[0]);
  };

  const getData = useEffect(() => {
    getWeather();
  }, [query]);
  console.log(data);
  return (
    <WeatherContext.Provider
      value={{
        search,
        query,
        data,
        oneDay,
        getSearch,
        getData,
        onSubmit
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

const WeatherConsumer = WeatherContext.Consumer;

export { WeatherProvider, WeatherConsumer };
