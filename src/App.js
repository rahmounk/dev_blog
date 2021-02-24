import React from "react";
import "./styles/components/_App.scss";

import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    );
}
export default App;
