// import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Friends from "./components/Friend/Friends";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import FriendDetail from "./components/FriendDetail/FriendDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/home'>
          <Home/>
        </Route>
        <Route path = '/friend/:id'>
          <FriendDetail/>
        </Route>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "*">
         <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
