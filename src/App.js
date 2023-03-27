import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Route exact path="/">
            <News key="general" pageSize={12} country="in" category="general" />
            ;
          </Route>
          <Route exact path="/business">
            <News
              key="business"
              pageSize={12}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              pageSize={12}
              key="entertainment"
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News key="general" pageSize={12} country="in" category="general" />
          </Route>
          <Route exact path="/health">
            <News key="health" pageSize={12} country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <News key="science" pageSize={12} country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <News pageSize={12} country="in" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News
              key="sports"
              pageSize={12}
              country="in"
              category="technology"
            />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}
