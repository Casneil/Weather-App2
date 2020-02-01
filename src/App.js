import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Picker from "./components/Picker";
import { WeatherConsumer } from "./context/WeatherContext";

const App = props => {
  return (
    <div className="home">
      <Navbar />
      <WeatherConsumer>
        {value => {
          return console.log(value);
        }}
        {/* <Home data={[data]} one={oneDay} /> */}
      </WeatherConsumer>
      <Picker />
    </div>
  );
};

export default App;
