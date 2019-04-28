import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Workbox } from 'workbox-window';

// core components
import Default from "layouts/Default.jsx";

import "assets/css/material-dashboard-react.css?v=1.6.0";
import "assets/css/arkham-horror-icons.css";

const hist = createBrowserHistory();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const wb = new Workbox('/sw.js');
    wb.register();
    });
  }

ReactDOM.render(
    <Router history={hist}>
      <Switch>
        <Route path="/ahda" component={Default} />
        <Redirect from="/" to="/ahda/home" />
      </Switch>
    </Router>,
  document.getElementById("root")
);
