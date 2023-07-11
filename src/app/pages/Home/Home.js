import React, { Component } from "react";
import AboutIcons from "../../components/AboutIcons/AboutIcons";
import Aboutinfo from "../../components/Aboutinfo/Aboutinfo";
import Carouselcom from "../../components/Carousel/Carouselcom";
import Gallery from "../Gallery/Gallery";
import NewsAndEvents from "../NewsAndEvents/NewsAndEvents";
import "./Home.css";
import { homedata } from "../../utils/seoConstants";
import OpenGraphTags from "../../components/OpenGraphTags/OpenGraphTags";
export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
       
        <OpenGraphTags ogtags={homedata}/>
       
        <Carouselcom />
        <Aboutinfo />
        <NewsAndEvents isHome={true} />
        <AboutIcons />
        
        <Gallery isHome={true} />
      </div>
    );
  }
}
