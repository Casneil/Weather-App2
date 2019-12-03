import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { recieveWeather } from "./actions/weather";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Picker from "./components/Picker";

const App = props => {
  //   Search City
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Berlin");
  const [data, setData] = useState([]);
  // const [threeDays, setThreeDays] = useState([]);
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

    // props.dispatchWeather(response.data);

    // Three Days Forecast
    // try {
    //   for (let i = 0; i < response.data.length - 13; i++) {
    //     setThreeDays([response].data[i]);
    //   }
    //   // Five Days Forecast
    //   for (let i = 0; i < response.data.length - 11; i++) {
    //     setFiveDays([response].data[i]);
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };

  // useEffect(() => {
  //   getWeather();
  // }, [query]);
  // console.log(data);
  return (
    <div className="home">
      <Navbar onSubmit={onSubmit} getSearch={getSearch} />
      <Home data={[data]} />
      <Picker />
    </div>
  );
};

// function mapStateToProps(store) {
//   return {
//     weather: store.weather
//   };
// }

export default App;
