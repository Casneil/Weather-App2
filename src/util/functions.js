import React from "react";

import t01d from "../assets/t01d.png";

export const getIcon = weatherCode => {
  switch (weatherCode) {
    case weatherCode === 500:
      return <img src={t01d} />;
  }
};

export const mapThreeDays = data => {
  let result;
  for (let i = data.length - 13; i >= 3; i--) {
    result = data[i];
  }
  return result;
};
