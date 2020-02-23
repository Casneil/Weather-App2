import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import dataReducer from "../reducers/dataReducer";
import { combineReducers } from "redux";

const middleWare = [thunk];

const initialState = {};

const reducers = combineReducers({
  data: dataReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
