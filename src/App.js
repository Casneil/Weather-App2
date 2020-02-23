import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import "./App.css";

import { API_KEY } from "./key";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Picker from "./components/Picker";

import { getData, getOneDay, getThreeDays } from "./redux/actions/actions";

const App = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Berlin");

  const getSearch = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setQuery(search);
  };

  //  // Api Request and Key Weather Bit
  //   const request = `https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=${API_KEY}`;

  // Api Request and Key Open Weather
  const request = `http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}`;

  // `api.openweathermap.org/data/2.5/weather?q=${query},de&APPID=${API_KEY}`;

  const initialData = () => {
    dispatch(getOneDay(request));
    dispatch(getData(request));
    dispatch(getThreeDays(request));
  };

  useEffect(() => {
    initialData();
  }, [query]);

  return (
    <div className="home">
      <Navbar getSearch={getSearch} onSubmit={onSubmit} />
      <Home />
      <Picker />
    </div>
  );
};

export default App;
