import React from 'react';
import './App.css';
import { Provider } from "react-redux"
import store from './redux/stores'
import HomePage from './views/HomePage';
import Background from './views/Background';
import 'bootstrap/dist/css/bootstrap.css';

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
          <Route exact path="/background" component={Background} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
