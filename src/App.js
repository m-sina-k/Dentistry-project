import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Backdrop from "./Components/Backdrop";
import Header from "./Components/Header/Header";
import SidebarMenu from "./Components/Header/SidebarMenu/SidebarMenu";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import AboutUs from "./Pages/About-us/AboutUs";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";
import { useGlobalContext } from "./Context/context";
function App() {
  const { showLoading} = useGlobalContext();

  

  return showLoading ? (
    <Loading />
  ) : (
    <Router>
      <Backdrop />
      <Header />
      <SidebarMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services}/>
        <Route path="/about" component={AboutUs}/>
        <Route path="/blog" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
