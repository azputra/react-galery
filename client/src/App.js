import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from './redux/stores'
import HomePage from './views/HomePage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Switch>
      <Route exact path="/" component={HomePage} />
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
