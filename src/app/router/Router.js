import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";

import NewsAndEvents from "../pages/NewsAndEvents/NewsAndEvents";
import ReadMore from "../pages/NewsAndEvents/ReadMore/ReadMore";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import Aboutbjp from "../pages/AboutBJP/AboutBJP";
import Aboutsavadatti from "../pages/AboutSavadatti/AboutSavadatti";
import Loader from "../components/Loader/Loader";
import FaceBook from "../pages/FaceBook/Facebook";
const home = lazy(() => import("../pages/Home/Home"));
export default class RouterMain extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let url = window.location.href;
    if ((url && decodeURI(url).indexOf("?")) > -1) {
      const queryStartIndex = decodeURI(url).indexOf("?") + 1;
      let queryParams = url.split('&');
      queryParams = queryParams.filter(item => !!item);
      url = queryParams.join('&');
      if(url && url.indexOf("fbclid") > -1) {
        // debugger;
        window.location.assign("/");
      }
      
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/profile" component={Profile} />

              <Route exact path="/NewsAndEvents" component={NewsAndEvents} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/facebook" component={FaceBook} />
              <Route exact path="/details/:title" component={ReadMore} />

              <Route exact path="/contact" component={Contact} />
              <Route exact path="/aboutbjp" component={Aboutbjp} />
              <Route exact path="/aboutsavadatti" component={Aboutsavadatti} />

              <Route exact component={NotFound} />
            </Switch>
          </Suspense>
          <Footer />
        </Router>
      </div>
    );
  }
}
