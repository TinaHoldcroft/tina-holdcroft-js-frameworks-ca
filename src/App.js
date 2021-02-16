import React from "react";
import "./sass/styles.scss";
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import GameDetail from "./components/game/GameDetail";
import Nav from "./components/layout/Nav";
import Favorites from "./components/favorites/Favorites";

function App() {
    return (
        <Router>
            <Nav/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/favorites" exact component={Favorites}/>
                <Route path="/game/:id" exact component={GameDetail}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}

export default App;