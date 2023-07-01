
import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import {createStore} from 'redux';
import rooReducer from './reducers';

const store = createStore(rootReducer);


function App() {
 
  
  return (
    <Provider store={store}>
    <div className="App">
      <h1>OXYGEN GALLERY APP</h1>
    </div>

    </Provider>
  );
}

export default App;
