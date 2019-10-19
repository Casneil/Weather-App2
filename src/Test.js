import React from "react";

const [weather, getWeather] = usestate([]);
const [query, getQuery] = usestate("");

export default function Test(props) {
  const API_KEY = "15f9cc886ac24f548f6fb49bc3ea7913";
  const request = `https://api.weatherbit.io/v2.0/forecast/daily?city=berlin&key=${props.API_KEY}`;
  return <div>Hello from Test</div>;
}
