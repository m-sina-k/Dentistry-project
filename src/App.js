import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Backdrop from "./Components/Backdrop";
import Header from "./Components/Header/Header";
import SidebarMenu from "./Components/Header/SidebarMenu/SidebarMenu";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <Router>
      <Backdrop />
      <Header />
      <SidebarMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services"/>
        <Route path="/about" />
        <Route path="/blog" />
      </Switch>
    </Router>
  );
}

export default App;
