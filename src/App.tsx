import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Channels } from "./Channels/Channels";
import { Groups } from "./Groups/Groups";
import "./App.css";

function App(): JSX.Element {
  return (
    <div>
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/channels">
            <Channels />
          </Route>
          <Route exact path="/groups">
            <Groups />
          </Route>
        </Switch>
        <Redirect to="/channels" />
      </HashRouter>
      <p className="credits">
        Coded by{" "}
        <a href="https://github.com/Lorenzo-Pappalardo">Lorenzo Pappalardo</a>
      </p>
    </div>
  );
}

export default App;
